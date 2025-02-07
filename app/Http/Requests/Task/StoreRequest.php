<?php

namespace App\Http\Requests\Task;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'user_id' => ['required'],
            'title'       => [
                'required', 
                'string', 
                'max:255',
                Rule::unique('tasks', 'title')->where(function ($query) {
                    return $query->where('user_id', $this->user_id);
                }),              
            ],
            'description' => ['nullable', 'string'],
            'position' => ['required'],
            'status' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'title.unique' => 'The title is alredy exists in this category',
            'user_id.required' => 'user_id is required'
        ];
    }     
}
