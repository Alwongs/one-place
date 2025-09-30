<?php

namespace App\Helpers;

use App\Helpers\DateHelper;

class TaskHelper
{
    public static function chunkTasksByImportantStatus($tasks)
    {
        $a = [];
        $b = [];
        $c = [];
        $d = [];

        foreach ($tasks as $task) {
            switch ($task->important_status) {
                case 'A':
                    $a[] = $task;
                    break;
                case 'B':
                    $b[] = $task;
                    break;
                case 'C':
                    $c[] = $task;
                    break;
                case 'D':
                    $d[] = $task;
                    break;
                default:
                    $a[] = $task;
                    break;
            }
        }

        return [$a, $b, $c, $d];
    }    
}