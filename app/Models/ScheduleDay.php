<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleDay extends Model
{
    use HasFactory;

    protected $fillable = ['year', 'month', 'day', 'timestamp', 'shift_type', 'week_day', 'user_id', 'description'];
}
