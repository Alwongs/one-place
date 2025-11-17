<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title', 255);
            $table->string('image_url', 255);
            $table->string('product_url', 255);   
            $table->json('ozon_price_history')->nullable();  
            $table->json('wb_price_history')->nullable(); 
            $table->json('ya_price_history')->nullable();      
            $table->text('description')->nullable();   
            $table->integer('rate')->default(5);  
            $table->integer('position')->default(0);
            $table->char('status', 1)->default('A');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
