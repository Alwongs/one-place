<?php

namespace App\Http\Requests\Event;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\DateHelper;
use Illuminate\Validation\Validator;
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
            'title' => [
                'required',
                'string',
                'max:100',
                Rule::unique('events')->where(function ($query) use ($userId) {
                    return $query->where('user_id', $userId);
                }),
            ],
            'description' => ['nullable', 'string'],
            'type'        => ['required', 'max:2'],
            'timestamp'   => ['required', 'max:10']
        ];
    }

    public function messages()
    {
        return [
            'title.unique' => 'The title is alredy exists in this category',
            'user_id.required' => 'user_id is required'
        ];
    }  

    // public function after(): array
    // {
    //     return [
    //         function (Validator $validator) {
    //             $date = ['day' => $this->day, 'month' => $this->month, 'year' => $this->year];
    //             if (!DateHelper::validateDate($date)) {
    //                 $validator->errors()->add(
    //                     'date',
    //                     'The date is not correct!'
    //                 );
    //             }
    //         }
    //     ];
    // } 
}
