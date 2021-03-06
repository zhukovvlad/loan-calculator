import React from "react";

import { getPaymentStats } from "../../utils/utils";

const PaymentTable = ({amountToBorrow, borrowTerm, interestRate}) => {
    if (amountToBorrow === '' || borrowTerm === '' || interestRate === '') {
        return (
            <div className="ui vertical segment">
                <div className="ui text container">
                    <h3 className="ui huge center aligned header">Type values in fields above</h3>
                </div>
            </div>
        )
    }

    const renderList = getPaymentStats(amountToBorrow, borrowTerm, interestRate)[0].map((row) => {
        return (
            <tr key={row.period}>
                <td className="ui center aligned">{row.period}</td>
                <td className="ui center aligned">{row.initialDebt.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}</td>
                <td className="ui center aligned">{row.totalMonthlyPayment.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}</td>
                <td className="ui center aligned">{row.interestMonthlyPaid.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}</td>
                <td className="ui center aligned">{row.principalMonthlyPaid.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}</td>
                <td className="ui center aligned">{row.finalDebt.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}</td>
            </tr>
        );
    });

    const monthlyPayment = getPaymentStats(amountToBorrow, borrowTerm, interestRate)[1];
    const totalInterestPaid = getPaymentStats(amountToBorrow, borrowTerm, interestRate)[2];
    const totalPaid = totalInterestPaid + parseFloat(amountToBorrow);
   

    console.log(getPaymentStats(amountToBorrow, borrowTerm, interestRate));
    return (
        <div>
            <div className="ui three small statistics">
                <div className="statistic">
                <div className="value">
                        {monthlyPayment.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}
                    </div>
                    <div className="label">
                        Monthly Payment
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        {totalInterestPaid.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}
                    </div>
                    <div className="label">
                        Total Interest Paid
                    </div>
                </div>
                <div className="statistic">
                    <div className="value">
                        {totalPaid.toLocaleString('en-En', {style: 'currency', currency: 'USD'})}
                    </div>
                    <div className="label">
                        Total Paid
                    </div>
                </div>
            </div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="ui center aligned">Period</th>
                        <th className="ui center aligned">Initial debt</th>
                        <th className="ui center aligned">Total Monthly Payment</th>
                        <th className="ui center aligned">Interest Paid</th>
                        <th className="ui center aligned">Principal Paid</th>
                        <th className="ui center aligned">Final Debt</th>
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
