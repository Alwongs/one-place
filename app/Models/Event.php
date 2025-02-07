<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'timestamp', 'type', 'user_id'];

    public function user() 
    {
        return $this->BelongsTo(User::class);
    }
}
