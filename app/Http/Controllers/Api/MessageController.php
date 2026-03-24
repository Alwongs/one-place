<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

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
}
