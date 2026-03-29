<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Http\Response;
// use Illuminate\Http\JsonResponse;

class MessageController extends Controller
{
    // Получить все сообщения (сортировка по дате)
    public function index()
    {      
        return response()->json(['messages' => Message::with('user')->orderBy('created_at', 'asc')->get()]);
    }

    // Отправить новое сообщение
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required|string|max:1000',
        ]);

        $message = Message::create([
            'user_id' => $request->user_id,
            'message' => $request->message,
        ]);

        return response()->json($message->load('user'), 201);
    }

    public function deleteMessage($id)
    {
        return auth()->id;
        // $message = Message::find($id);
        // if (!$message) {
        //     return response()->json(['message' => 'Message not found'], Response::HTTP_NOT_FOUND); // 404
        // }

        // if ($message->user_id !== auth()->id()) {
        //     return response()->json(['message' => 'You are not authorized to delete this message'], Response::HTTP_FORBIDDEN); // 403
        // }

        // try {
        //     if ($message->delete()) {
        //         return response()->json(['message' => 'Message deleted successfully'], Response::HTTP_OK); // 200
        //     } else {
        //         return response()->json(['message' => 'Failed to delete message'], Response::HTTP_INTERNAL_SERVER_ERROR); // 500
        //     }
        // } catch (\Exception $e) {
        //     return response()->json([
        //         'message' => 'An error occurred while deleting the message',
        //         'error' => config('app.debug') ? $e->getMessage() : null
        //     ], Response::HTTP_INTERNAL_SERVER_ERROR);
        // }
    }
}
