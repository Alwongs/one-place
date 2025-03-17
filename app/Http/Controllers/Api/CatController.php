<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;

class LogController extends Controller
{
    public function index()
    {
        $task = [
            'user_id' => 1,
            'title' =>'Запрос тест. Контроллер: LogController'
        ];

        $result = Task::create($task);

        return response()->json(['result' => $result]);
    }
}
