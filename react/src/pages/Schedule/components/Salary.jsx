import { useEffect, useState } from "react";
import SalaryElement from "./SalaryElement";

export default function Salary({ year, month, workDaysCount, workNightsCount, closeModalHandler }) {
    const [ showModal, setShowModal ] = useState(false);
    const openModalHandler = () => {
        setShowModal(true);
    }
    const closeSettingsHandler = () => {
        setShowModal(false);
    }

    const [ prizeValue, setPrizeValue ] = useState(0);
    const [ prizeStored, setPrizeStored ] = useState(0);

    useEffect(() => {
        const prize = localStorage.getItem(`${year}_${month}_prize`);
        if (prize) {
            setPrizeStored(prize);
        }
    }, []);

    const taxRate = 13; // persents
    const tradeUnionRate = 1; // persents
    const rate = 240; // payment per hour
    const hours = (workNightsCount + workDaysCount) * 11;
    const baseSalary = (workNightsCount + workDaysCount) * 11 * rate;
    const nightAddPayment = workNightsCount * 11 * rate * 0.4;
    const prize = +prizeStored * rate || 0;
    const prizePercent = 100 * +prizeStored / hours;
    const accrued = baseSalary + nightAddPayment + prize;
    const tax = accrued / 100 * taxRate;
    const tradeUnion = accrued / 100 * tradeUnionRate;
    const takeHomePay = baseSalary + nightAddPayment + prize - tax - tradeUnion;

    const formatMoney = (money) => {
        return Number(money.toFixed(0)).toLocaleString('ru-RU')
    }

    const inputChangeHandler = (e) => {
        setPrizeValue(e.target.value);
    }

    const saveSettingsHandler = () => {
        localStorage.setItem(`${year}_${month}_prize`, prizeValue);
        setPrizeStored(prizeValue);
        setShowModal(false);
    }

    return (
        <div className="schedule-month-info-wrapper">
            <div className="schedule-month-info">
                <div className="schedule-month-info__close-modal mb-1">
                    <div onClick={openModalHandler}>Settings</div>
                    <div onClick={closeModalHandler}>Close</div>
                </div> 

                <h3 className="schedule-month-info__subtitle mb-1">
                    Часы
                </h3>

                <SalaryElement label="Часы" value={hours} unit="h." classes="mb-0-5"/>
                <SalaryElement label="Премия" value={prizeStored} unit="h." classes="mb-1-5" />

                <h3 className="schedule-month-info__subtitle mb-1">
                    Начисления
                </h3>                

                <SalaryElement label="Оклад" value={formatMoney(baseSalary)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Ночные" value={formatMoney(nightAddPayment)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Премия" value={formatMoney(prize)} unit="р." classes="income mb-0-5" />
                <SalaryElement label="Начислено" value={formatMoney(accrued)} unit="р." classes="income mb-1-5" />   

                <h3 className="schedule-month-info__subtitle mb-1">
                    Вычеты
                </h3>          

                <SalaryElement label="Налог" value={formatMoney(tax)} unit="р." classes="outcome mb-0-5" /> 
                <SalaryElement label="Профсоюз" value={formatMoney(tradeUnion)} unit="р." classes="outcome mb-1-5" /> 

                <h3 className="schedule-month-info__subtitle mb-1">
                    Итог
                </h3>  

                <SalaryElement label="Зарплата" value={formatMoney(takeHomePay)} unit="р." classes="income mb-2" />   

                {showModal && (
                    <div className="month-settings-modal-wrapper">
                        <div className="month-settings-modal">   

                            <div className="month-settings-modal__close-modal mb-1">
                                <div></div>
                                <div onClick={closeSettingsHandler}>Close</div>
                            </div> 

                            <h3 className="month-settings-modal__title mb-2">Settings</h3>

                            <div className="month-settings-modal__row mb-3">
                                <label className="month-settings-modal__label">Премия:</label>
                                <div className="month-settings-modal__input">
                                    <input onChange={inputChangeHandler} type="text" name="prize" />
                                </div>
                            </div>

                            <div className="month-settings-modal__row">
                                <button className="btn btn-green" onClick={saveSettingsHandler}>Save</button>
                            </div>
                        </div>
                    </div>
                )}                          
            </div> 
        </div>
    )
}
