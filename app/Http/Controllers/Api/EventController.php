<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Event\StoreRequest;
use App\Http\Requests\Event\UpdateRequest;
use App\Models\Event;
use App\Helpers\DateHelper;
use App\Http\Resources\EventResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return response()->json(['events' => Event::where('user_id', Auth::id())->get()]);
    }

    public function store(StoreRequest $request)
    {
        if ($request->validated()) {
            $event = $request->all();
            $event['user_id'] = Auth::user()->id;
            return response()->json(['data' => new EventResource(Event::create($event))]);
        }
    }

    public function show(Event $event)
    {
        return new EventResource($event);
    }

    public function update(UpdateRequest $request, Event $event)
    {
        if ($request->validated()) {
            $data = $request->all();
            $event->update($data);
            return response()->json(['data' => new EventResource($event)]);
        }
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json(['message' => 'Post removed']);
    }
}
