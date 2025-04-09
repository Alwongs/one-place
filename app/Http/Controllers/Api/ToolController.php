<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tool\StoreRequest;
use App\Http\Requests\Tool\UpdateRequest;
use App\Models\Tool;
use Illuminate\Http\Request;
use App\Http\Resources\ToolResource;
use Illuminate\Support\Facades\Auth;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tools = Tool::where('user_id', Auth::id())->orderBy('title', 'ASC')->orderBy('qty', 'DESC')->get();
        return response()->json(['tools' => $tools]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        if ($request->validated()) {

            $tool = $request->all();
            $tool['user_id'] = Auth::user()->id;
            
            return response()->json(['data' => new ToolResource(Tool::create($tool))]);
        } else {
            return response()->json(['message' => 'not validated']); 
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tool $tool)
    {
        return $tool;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Tool $tool)
    {
        if ($request->validated()) {        
            $tool->update($request->all());
            return response()->json(['data' => new ToolResource($tool)]);
        } else {
            return response()->json(['message' => 'not validated']); 
        } 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
        $tool->delete();
        return response()->json(['message' => 'Tool removed']);
    }
}
