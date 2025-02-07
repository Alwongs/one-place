<?php

namespace App\Http\Requests\Event;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\DateHelper;
use Illuminate\Validation\Validator;

class UpdateRequest extends FormRequest
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
            'title'       => ['required', 'string', 'max:100'],
            'description' => ['nullable', 'string'],
            'type'        => ['required', 'max:2'],
            'timestamp'   => ['required', 'max:10']
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
