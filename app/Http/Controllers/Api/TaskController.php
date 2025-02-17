<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Task\StoreRequest;
use App\Http\Requests\Task\UpdateRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::where('user_id', Auth::id())->orderBy('rate', 'DESC')->orderBy('position', 'ASC')->get();
        return response()->json(['tasks' => $tasks]);
    }

    public function store(StoreRequest $request)
    {
        if ($request->validated()) {

            $task = $request->all();
            $task['user_id'] = Auth::user()->id;
            
            return response()->json(['data' => new TaskResource(Task::create($task))]);
        } else {
            return response()->json(['message' => 'not validated']); 
        }
    }

    public function show(Task $task)
    {
        return $task;
        return new TaskResource($task);
    }

    public function update(UpdateRequest $request, Task $task)
    {
        if ($request->validated()) {        
            $task->update($request->all());
            return response()->json(['data' => new TaskResource($task)]);
        } else {
            return response()->json(['message' => 'not validated']); 
        }        
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(['message' => 'Task removed']);
    }
}
