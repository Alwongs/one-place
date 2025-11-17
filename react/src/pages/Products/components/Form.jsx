import InputField from "@components/form/InputField";
import TextareaField from "@components/form/TextareaField";
import SubmitBtnBlock from "./SubmitBtnBlock";

export default function Form({ onSubmit, onChange, formData }) {

    return (
        <form className="form" onSubmit={onSubmit}>

            <InputField
                id="taskFormTitle"
                label="Title"
                name="title"
                value={formData.title}
                onChange={onChange}
            />

            <InputField
                id="taskFormImageUrl"
                label="Image url"
                name="image_url"
                value={formData.image_url}
                onChange={onChange}
            />      

            <InputField
                id="taskFormProductUrl"
                label="Product url"
                name="product_url"
                value={formData.product_url}
                onChange={onChange}
            />  

            <InputField
                id="taskFormPriceHistory"
                label="Ozon rice history"
                name="ozon_price_history"
                value={formData.ozon_price_history}
                onChange={onChange}
            />    

            <InputField
                id="taskFormPriceHistory"
                label="Wildberries price history"
                name="wb_price_history"
                value={formData.wb_price_history}
                onChange={onChange}
            />  

            <InputField
                id="taskFormPriceHistory"
                label="Yandex price history"
                name="ya_price_history"
                value={formData.ya_price_history}
                onChange={onChange}
            />                                                     

            <InputField
                id="taskFormRate"
                label="Rate"
                name="rate"
                value={formData.rate}
                onChange={onChange}
            />

            <InputField
                id="taskFormPosition"
                label="Position"
                name="position"
                value={formData.position}
                onChange={onChange}
            />

            <InputField
                id="taskFormStatus"
                label="Status"
                name="status"
                value={formData.status}
                onChange={onChange}
            />            

            <TextareaField
                id="taskFormDecription"
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