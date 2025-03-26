<?php

namespace App\Http\Requests\Tool;

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
        $userId = $this->user()->id;

        return [
            // 'user_id' => ['required'],
            'title' => [
                'required',
                'string',
                'max:255', // Ограничение длины, если нужно
                Rule::unique('tasks')->where(function ($query) use ($userId) {
                    return $query->where('user_id', $userId);
                }),
            ],
            'description' => ['nullable', 'string'],
            'qty' => ['required'],
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
