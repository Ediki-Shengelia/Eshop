<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public $incrementing = false;
    public $keyType = 'unsignedBigInteger';
    protected $fillable = [
        'title',
        'user_id',
        'post_photo',
        'description',
        'phone_number',
        'price',
        'type',
        'old_price',
        'location',
    ];
    public static array $typeArr = ["Phone", "Laptop", "Tabs", "TV", "Smart Watch", "Photo/Video"];
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->id = intval(now()->getTimestampMs() . rand(100, 999));
        });
    }
    public function scopeSearch(Builder $query, string $search): Builder
    {
        return $query->where('id', $search)
            ->orWhere('title', 'LIKE', '%' . $search . '%');
    }
}
