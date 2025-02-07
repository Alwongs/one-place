<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'year' => $this->year,
            'month' => $this->month,
            'day' => $this->day,
            'timestamp' => $this->timestamp,
            'week_day' => $this->week_day,
            'shift_type' => $this->shift_type,
            'description' => $this->description,
        ];
    }  
}
