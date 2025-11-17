<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);

        return [
            'id' => $this->id,
            'title' => $this->title,
            'image_url' => $this->image_url,
            'product_url' => $this->product_url,
            'ozon_price_history' => $this->price_history,
            'wb_price_history' => $this->price_history,
            'ya_price_history' => $this->price_history,
            'description' => $this->description,
            'qty' => $this->qty,
            'user_id' => $this->user_id,
            'rate' => $this->rate,
            'position' => $this->position,
            'status' => $this->status,
        ];        
    }
}
