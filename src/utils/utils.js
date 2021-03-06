export const getPaymentStats = (amountToBorrow, borrowTerm, interestRate) => {

    const monthlyPaymentStat = [];  // We will write here all information about payments in current period

    const monthRate = interestRate/12/100;
    const annuityCoeff = monthRate === 0 ? 1 : monthRate * Math.pow(1 + monthRate, borrowTerm) / (Math.pow(1 + monthRate, borrowTerm) - 1);
    let totalMonthlyPayment = Math.ceil(amountToBorrow * annuityCoeff);

    console.log('annuiti coeff ', annuityCoeff);
    console.log('total payment ', totalMonthlyPayment);

    let initialDebt = amountToBorrow;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    for (let i = 1; i <= borrowTerm; i++) {
        let interestMonthlyPaid = initialDebt * monthRate;
        let principalMonthlyPaid = totalMonthlyPayment - interestMonthlyPaid;
        let finalDebt = initialDebt - principalMonthlyPaid;

        if (initialDebt <= totalMonthlyPayment) {
            principalMonthlyPaid = initialDebt;
            finalDebt = 0;
            totalMonthlyPayment = principalMonthlyPaid + interestMonthlyPaid;
        }

        totalInterestPaid += parseFloat(interestMonthlyPaid.toFixed(2));
        totalPrincipalPaid += principalMonthlyPaid;

        monthlyPaymentStat.push({
            period: i,
            initialDebt: initialDebt === amountToBorrow ? parseFloat(initialDebt) : parseFloat(initialDebt.toFixed(2)),
            totalMonthlyPayment: totalMonthlyPayment,
            interestMonthlyPaid: parseFloat(interestMonthlyPaid.toFixed(2)),
            principalMonthlyPaid: parseFloat(principalMonthlyPaid),
            finalDebt: parseFloat(finalDebt.toFixed(2)),
            totalInterestPaid: parseFloat(totalInterestPaid.toFixed(2)),
            totalPrincipalPaid: parseFloat(totalPrincipalPaid)
        });

        initialDebt = finalDebt;
    }

    return [monthlyPaymentStat, totalMonthlyPayment, totalInterestPaid, amountToBorrow];
};
