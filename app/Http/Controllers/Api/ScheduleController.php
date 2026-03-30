<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ScheduleDay;
use Illuminate\Http\Request;
use App\Http\Resources\ScheduleResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Helpers\ScheduleDayHelper;

class ScheduleController extends Controller
{
    protected $userId;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $authUser = Auth::user();
            if ($authUser && $authUser->role === 'M') {
                $rootUser = User::where('is_root', 1)->first();
                $this->userId = $rootUser ? $rootUser->id : null;
            } else {
                $this->userId = $authUser ? $authUser->id : null;
            }
            return $next($request);
        });

        $this->middleware('app.access:schedule');
        // $this->middleware('app.access:schedule')->only(['index', 'store']);
        // $this->middleware('app.access:schedule')->except(['show']);         
    }


    public function getDaysInYearCount($start, $end)
    {
        $counts = [];
        foreach (range($start, $end) as $year) {
            $counts["year_{$year}"] = ScheduleDay::where('user_id', $this->userId)
                ->where('year', $year)
                ->count();
        }
        return response()->json(['counts' => $counts]);
    }

    public function getDaysInMonthCount($year)
    {
        $counts = [];
        foreach (range(1, 12) as $month) {
            $counts["month_{$month}"] = ScheduleDay::where('user_id', $this->userId)
                ->where('year', $year)
                ->where('month', $month)
                ->count();
        }
        return response()->json(['counts' => $counts]);
    }

    public function getYearMonthDays($year, $month)
    {
        $schedule_days = ScheduleDay::where('user_id', $this->userId)
            ->where('year', $year)
            ->where('month', $month)
            ->orderBy('timestamp', 'ASC')
            ->get();
        return response()->json(['schedule_days' => $schedule_days]);
    }

    public function getYearMonthDay($id)
    {
        return new ScheduleResource(ScheduleDay::find($id));
    }

    public function addMonth(Request $request)
    {
        ScheduleDayHelper::createMonthSchedule($request->all());
        return response()->json(['data' => 'success']);
    }

    public function updateDay(Request $request, $id)
    {
        $scheduleDay = ScheduleDay::find($id);
        $scheduleDay->update($request->all());
        return response()->json(['schedule_day' => $scheduleDay]);
    }

    public function deleteMonth($year, $month)
    {
        ScheduleDay::where('user_id', $this->userId)
            ->where('year', $year)
            ->where('month', $month)
            ->delete();
    }
}
