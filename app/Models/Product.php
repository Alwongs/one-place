<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image_url',
        'product_url',
        'description',
        'ozon_price_history',
        'wb_price_history',
        'ya_price_history',
        'rate',
        'user_id',
        'position',
        'status',
        'important_status'
    ];    
}
