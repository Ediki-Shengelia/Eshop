<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $request = request('search');

        $post = Post::when(
            $request,
            fn($q, $title) => $q->search($title)
        )->paginate(20);

        return PostResource::collection($post);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $photo_path = null;
        if ($request->hasFile('post_photo')) {
            $photo_path = $request->file('post_photo')->store('posts', 'public');
        }
        $post = Post::create([
            ...$data,
            'post_photo' => $photo_path
        ]);
        return response()->json(new PostResource($post), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Post $post)
    // {
    //     $this->authorize('update', $post);
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post  $post)
    {
        $this->authorize('delete', $post);
        if ($post->post_photo) {
            Storage::disk('public')->delete($post->post_photo);
        }
        $post->delete();
        return response()->json([
            "message" => "post deleted successfully"
        ]);
    }
}
