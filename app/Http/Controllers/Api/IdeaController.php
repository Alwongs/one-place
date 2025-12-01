<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Idea;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\IdeaResource;

class IdeaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['ideas' => Idea::where('user_id', Auth::id())->get()]);     
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $idea = $request->all();
        $idea['user_id'] = Auth::user()->id;
        
        return response()->json(['data' => new IdeaResource(Idea::create($idea))]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Idea $idea)
    {
        return $idea;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Idea $idea)
    {
        $idea->update($request->all());
        return response()->json(['data' => new IdeaResource($idea)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Idea $idea)
    {
        $idea->delete();
        return response()->json(['message' => 'Idea removed']);
    }
}
