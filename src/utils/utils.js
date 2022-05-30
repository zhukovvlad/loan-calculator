export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    // console.log(!amountToBorrow && !borrowTerm && !interestRate);
    // if (amountToBorrow === '' && borrowTerm === '' && interestRate === '') {
    //     return [1, 2, 3];
    // }
    const monthlyPaymentStat = [];  // We will write here all information about payments in current period

    const monthRate = interestRate/12/100;
    const annuityCoeff = monthRate * Math.pow(1 + monthRate, borrowTerm) / (Math.pow(1 + monthRate, borrowTerm) - 1);
    const totalMonthlyPayment = Math.ceil(amountToBorrow * annuityCoeff);

    // monthlyPaymentStat.push(totalMonthlyPayment);

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
        }

        totalInterestPaid += parseFloat(interestMonthlyPaid.toFixed(2));
        totalPrincipalPaid += principalMonthlyPaid;

        console.log('principalMonthlyPaid ', principalMonthlyPaid);
        

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
