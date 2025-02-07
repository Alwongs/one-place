<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ScheduleDay;
use Illuminate\Http\Request;
use App\Http\Resources\ScheduleResource;
use Illuminate\Support\Facades\Auth;
use App\Helpers\ScheduleDayHelper;

class ScheduleController extends Controller
{
    public function getDaysInYearCount($start, $end)
    {
        $counts = [];
        foreach (range($start, $end) as $year) {
            $counts["year_{$year}"] = ScheduleDay::where('year', $year)->count();
        }
        return response()->json(['counts' => $counts]);
    }

    public function getDaysInMonthCount($year)
    {
        $counts = [];
        foreach (range(1, 12) as $month) {
            $counts["month_{$month}"] = ScheduleDay::where('year', $year)->where('month', $month)->count();
        }
        return response()->json(['counts' => $counts]);
    }

    public function getYearMonthDays($year, $month)
    {
        $schedule_days = ScheduleDay::where('user_id', Auth::id())
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
        ScheduleDay::where('user_id', Auth::id())
            ->where('year', $year)
            ->where('month', $month)
            ->delete();
    }
}
