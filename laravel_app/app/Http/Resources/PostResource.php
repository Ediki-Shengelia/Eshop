<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'post_photo' => $this->post_photo ? asset('storage/' . $this->post_photo) : null,
            'description' => $this->description,
            'phone_number' => $this->phone_number,
            'price' => $this->price,
            'old_price' => $this->old_price,
            'location' => $this->location,
            'type' => $this->type,
            'user' => UserResource::collection($this->whenLoaded('user'))
        ];
    }
}
