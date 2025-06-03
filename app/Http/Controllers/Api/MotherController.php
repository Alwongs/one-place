<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ScheduleDay;

class MotherController extends Controller
{
    public function getDaysInYearCount($start, $end)
    {
        $rootUser = User::where('is_root', 1)->first();
        if (!$rootUser) {
            return response()->json(['counts' => 0]);
        }
        $counts = [];
        foreach (range($start, $end) as $year) {
            $counts["year_{$year}"] = ScheduleDay::where('user_id', $rootUser->id)
                ->where('year', $year)
                ->count();
        }
        return response()->json(['counts' => $counts]);
    }


    public function getDaysInMonthCount($year)
    {
        $rootUser = User::where('is_root', 1)->first();
        if (!$rootUser) {
            return response()->json(['counts' => 0]);
        }
        $counts = [];
        foreach (range(1, 12) as $month) {
            $counts["month_{$month}"] = ScheduleDay::where('user_id', $rootUser->id)
                ->where('year', $year)
                ->where('month', $month)
                ->count();
        }
        return response()->json(['counts' => $counts]);
    }


    public function getYearMonthDays($year, $month)
    {
        $rootUser = User::where('is_root', 1)->first();
        if (!$rootUser) {
            return response()->json(['schedule_days' => []]);
        }
        $schedule_days = ScheduleDay::where('user_id', $rootUser->id)
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
}
