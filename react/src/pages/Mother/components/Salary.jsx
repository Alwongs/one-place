import { useEffect, useState } from "react";
import SalaryElement from "./SalaryElement";

export default function Salary({ year, month, workDaysCount, workNightsCount, closeModalHandler }) {
    const formatMoney = (money) => {
        if (!isNaN(money)) {
            return Number(money.toFixed(0)).toLocaleString('ru-RU');
        } else {
            return 'Nan';
        }

    }
    const [ showModal, setShowModal ] = useState(false);
    const openModalHandler = () => {
        setShowModal(true);
    }
    const closeSettingsHandler = () => {
        setShowModal(false);
    }


    const [formData, setFormData] = useState({ rate: "", prize: "", firstSalary: "" });



    useEffect(() => {
        // const rate = localStorage.getItem(`${year}_${month}_rate`);
        // const prize = localStorage.getItem(`${year}_${month}_prize`);
        // const firstSalary = localStorage.getItem(`${year}_${month}_firstSalary`);

        setFormData({
            rate: localStorage.getItem(`${year}_${month}_rate`) || "",
            prize: localStorage.getItem(`${year}_${month}_prize`) || "",
            firstSalary: localStorage.getItem(`${year}_${month}_firstSalary`) || ""
        });
    }, []);


    const hoursPerDay = 11; // hours per day 
    const taxRate = 13; // persents
    const tradeUnionRate = 1; // persents
    const nightRatio = 0.4 // additional payment for night work ratio

    const rate = +formData.rate; // payment per hour
    const prize = +formData.prize; // additional payment
    const firstSalary = +formData.firstSalary; // first salary
    console.log(rate, prize, firstSalary);

    const hours = (+workNightsCount + +workDaysCount) * hoursPerDay;
    const baseSalary = hours * rate;
    const nightHours = workNightsCount * hoursPerDay
    const nightPayment = nightHours * rate * nightRatio;
    const prizePercent = (100 * +prize / hours).toFixed(0);
    const prizeSum =  +prize * rate;
    const income = baseSalary + nightPayment + prizeSum;

    const taxSum = income / 100 * taxRate;
    const tradeUnionSum = income / 100 * tradeUnionRate;
    const outcome = taxSum + tradeUnionSum;

    const takeHomePay = income - outcome;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem(`${year}_${month}_prize`, formData.prize);
        localStorage.setItem(`${year}_${month}_rate`, formData.rate);
        localStorage.setItem(`${year}_${month}_firstSalary`, formData.firstSalary);
        setShowModal(false);
    };    

    return (
        <div className="schedule-month-info-wrapper">
            <div className="schedule-month-info">
                <div className="schedule-month-info__close-modal mb-1">
                    <a href="#" onClick={openModalHandler}>Settings</a>
                    <a href="#"  onClick={closeModalHandler}>Close</a>
                </div> 


                <h3 className="schedule-month-info__subtitle mb-1">
                    Начисления
                </h3>                
                <SalaryElement label="Оклад" qty={`${hours} ч.`} value={formatMoney(baseSalary)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Ночные" qty={`${nightHours} ч.`}  value={formatMoney(nightPayment)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Премия" qty={`${prize} ч. ${prizePercent} %`}  value={formatMoney(prizeSum)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Начислено" value={formatMoney(income)} unit="р." classes="income mb-1-5 sum-line bold" />   


                <h3 className="schedule-month-info__subtitle mb-1">
                    Вычеты
                </h3>          
                <SalaryElement label="Налог" qty={`${taxRate} %`} value={formatMoney(taxSum)} unit="р." classes="outcome mb-0-5" /> 
                <SalaryElement label="Профсоюз" qty={`${tradeUnionRate} %`} value={formatMoney(tradeUnionSum)} unit="р." classes="outcome mb-0-5" /> 
                <SalaryElement label=""  value={formatMoney(outcome)} unit="р." classes="outcome mb-1-5 sum-line bold" /> 


                <h3 className="schedule-month-info__subtitle mb-1">
                    Итог
                </h3>
                <SalaryElement label="1 зарплата" value={formatMoney(firstSalary)} unit="р." classes="income mb-0-5 sum-line bold" />   
                <SalaryElement label="2 зарплата" value={formatMoney(takeHomePay - firstSalary)} unit="р." classes="income mb-2 bold" />   

                {showModal && (
                    <div className="month-settings-modal-wrapper">
                        <div className="month-settings-modal">   

                            <div className="month-settings-modal__close-modal mb-1">
                                <div></div>
                                <a href="#" onClick={closeSettingsHandler}>Close</a>
                            </div> 

                            <h3 className="month-settings-modal__title mb-2">Settings</h3>


                            <div className="month-settings-modal__row mb-1">
                                <label className="month-settings-modal__label">Ставка (руб/час):</label>
                                <div className="month-settings-modal__input">
                                    <input onChange={handleChange} type="text" name="rate" value={formData.rate} />
                                </div>
                            </div>

                            <div className="month-settings-modal__row mb-1">
                                <label className="month-settings-modal__label">Премия (час):</label>
                                <div className="month-settings-modal__input">
                                    <input onChange={handleChange} type="text" name="prize" value={formData.prize} />
                                </div>
                            </div>      

                            <div className="month-settings-modal__row mb-3">
                                <label className="month-settings-modal__label">1 зарплата (руб):</label>
                                <div className="month-settings-modal__input">
                                    <input onChange={handleChange} type="text" name="firstSalary" value={formData.firstSalary} />
                                </div>
                            </div>                                                    


                            <div className="month-settings-modal__row">
                                <button className="btn btn-green" onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                )}                          
            </div> 
        </div>
    )
}
