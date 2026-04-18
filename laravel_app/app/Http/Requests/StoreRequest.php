<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
           
            'title' => 'required|min:5',
            'post_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2028',
            'description' => 'nullable|string',
            'type' => 'nullable|in:Phone,Laptop,Tabs,TV,Smart Watch,Photo/Video',
            'phone_number' => "nullable|string",
            'price'       => 'required|numeric',
            'old_price'   => 'nullable|numeric',
            'location'    => 'nullable|string'
        ];
    }
}
