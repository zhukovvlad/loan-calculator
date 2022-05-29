import React from "react";

import { getAnnuityCoeff } from "../../utils/utils";

const PaymentTable = ({amountToBorrow, borrowTerm, interestRate}) => {
    if (amountToBorrow === '' && borrowTerm === '' && interestRate === '') {
        return (
            <div>
                Ola-la
            </div>
        )
    }


    const renderList = getAnnuityCoeff(amountToBorrow, borrowTerm, interestRate).map((row) => {
        return (
            <tr key={row.period}>
                <td>{row.period}</td>
                <td>{row.initialDebt}</td>
                <td>{row.interestMonthlyPaid}</td>
                <td>{row.principalMonthlyPaid}</td>
                <td>{row.finalDebt}</td>
            </tr>
        );
    });
   

    console.log(getAnnuityCoeff(amountToBorrow, borrowTerm, interestRate));
    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Period</th>
                        <th>Initial debt</th>
                        <th>Interest</th>
                        <th>Principal</th>
                        <th>Final Debt</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
        </div>
    )
};

export default PaymentTable;
