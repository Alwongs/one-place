import { EVENT_TYPES_OPTIONS } from "@functions/selectOptions";
import InputField from "@components/form/InputField";
import TextareaField from "@components/form/TextareaField";
import DatePicker from "@components/form/DatePicker";
import SubmitBtnBlock from "./SubmitBtnBlock";
import SelectField from "@components/form/SelectField";

export default function Form({ onSubmit, onChange, formData }) {
    return (
        <form className="form" onSubmit={onSubmit}>

            <SelectField
                classes="form__element"
                id="eventFormType"
                label="Type"
                name="type"
                value={formData.type}
                onChange={onChange}
                options={EVENT_TYPES_OPTIONS}
            />

            <DatePicker
                day={formData.day}
                month={formData.month}
                year={formData.year}
                onChange={onChange}                         
            />

            <InputField
                id="eventFormTitle"
                label="Title"
                name="title"
                value={formData.title}
                onChange={onChange}                         
            />  

            <TextareaField
                id="eventFormDecription"
                label="Description"
                name="description"
                value={formData.description}
                onChange={onChange}
            />

            <SubmitBtnBlock
                id={formData?.id}
                classes="flex-end"
            />
        </form>        
    )
}