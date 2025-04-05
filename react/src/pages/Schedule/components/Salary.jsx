export default function Salary({ workDaysCount, workNightsCount, closeModalHandler }) {

    const taxRate = 13; // persents
    const tradeUnionRate = 1; // persents
    const rate = 240; // payment per hour

    const hours = (workNightsCount + workDaysCount) * 11;
    const baseSalary = (workNightsCount + workDaysCount) * 11 * rate;
    const nightAddPayment = workNightsCount * 11 * rate * 0.4;
    const prize = 0;
    const accrued = baseSalary + nightAddPayment + prize;
    const tax = accrued / 100 * taxRate;
    const tradeUnion = accrued / 100 * tradeUnionRate;
    const takeHomePay = baseSalary + nightAddPayment + prize - tax - tradeUnion;

    return (
        <div className="schedule-month-info-wrapper">
            <div className="schedule-month-info">
                {/* <div className="schedule-month-info__days"><div>Days:</div> <div>{ workDaysCount }</div></div>   
                <div className="schedule-month-info__nights"><div>Nights:</div> <div>{ workNightsCount }</div></div>  */}
                <div className="schedule-month-info__close-modal">
                    <div onClick={closeModalHandler}>Close</div>
                </div> 

                <div className="schedule-month-info__row">
                    <div className="schedule-month-info__label">Hours:</div>
                    <div>{hours}</div>
                </div> 

                <div className="schedule-month-info__row income">
                    <div className="schedule-month-info__label">Оклад:</div>
                    <div>
                        <strong>{baseSalary.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div> 

                <div className="schedule-month-info__row income">
                    <div className="schedule-month-info__label">Ночные:</div>
                    <div>
                        <strong>{nightAddPayment.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div>

                <div className="schedule-month-info__row income">
                    <div className="schedule-month-info__label">Премия:</div>
                    <div>
                        <strong>{prize.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div>            

                <div className="schedule-month-info__row income">
                    <div className="schedule-month-info__label">Начислено:</div>
                    <div>
                        <strong>{accrued.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div> 

                <div className="schedule-month-info__row outcome">
                    <div className="schedule-month-info__label">Налог:</div>
                    <div>
                        <strong>{tax.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div> 

                <div className="schedule-month-info__row outcome">
                    <div className="schedule-month-info__label">Провсоюз:</div>
                    <div>
                        <strong>{tradeUnion.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div> 

                <div className="schedule-month-info__row income">
                    <div className="schedule-month-info__label">Зарплата:</div>
                    <div>
                        <strong>{takeHomePay.toFixed(0)}</strong> <small>р.</small>
                    </div>
                </div>                                          
            </div> 
        </div>
       
    )
}