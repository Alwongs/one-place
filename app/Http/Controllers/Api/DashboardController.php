<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Event;
use App\Helpers\EventHelper;

class DashboardController extends Controller
{
    public function index()
    {
        $events = Event::where('user_id', Auth::id())->get();
        list($overdue, $today, $tomorrow, $in_week) = EventHelper::chunckEventsToPeriods($events); 

        return response()->json([
            'overdue' => $overdue,
            'today' => $today,
            'tomorrow' => $tomorrow,
            'in_week' => $in_week,
        ]);
    }

    public function postpone($id)
    {
        $event = Event::find($id);

        if ($event->type == 'U') {
            return response()->json(['error' => 'Event type is Unique. It can not be postponed'], 404);
        }

        if ($event->type == 'M') {
            $new_timestamp = strtotime('+1 month', $event->timestamp);
            // $event->month = date('m', $new_timestamp);
        } 

        if ($event->type == 'A') {
            $new_timestamp = strtotime('+1 year', $event->timestamp);
            // $event->year = date('Y', $new_timestamp);
        }

        $event->timestamp = $new_timestamp;

        $event->update();   
        
        return response()->json(['data' => $event]);
    }
}
