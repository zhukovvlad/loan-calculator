export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    const monthlyPaymentStat = [];  // We will write here all information about payments in current period

    const monthRate = interestRate/12/100;
    const annuityCoeff = monthRate * Math.pow(1 + monthRate, borrowTerm) / (Math.pow(1 + monthRate, borrowTerm) - 1);
    const totalMonthlyPayment = Math.ceil(amountToBorrow * annuityCoeff);

    let initialDebt = amountToBorrow;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;


    for (let i = 1; i <= borrowTerm; i++) {
        let interestMonthlyPaid = initialDebt * monthRate;
        let principalMonthlyPaid = totalMonthlyPayment - interestMonthlyPaid;
        let finalDebt = initialDebt - principalMonthlyPaid;

        if (initialDebt < totalMonthlyPayment) {
            principalMonthlyPaid = initialDebt;
            finalDebt = 0;
        }

        totalInterestPaid += parseFloat(interestMonthlyPaid.toFixed(2));
        totalPrincipalPaid += principalMonthlyPaid;
        

        monthlyPaymentStat.push({
            initialDebt: initialDebt === amountToBorrow ? parseFloat(initialDebt) : parseFloat(initialDebt.toFixed(2)),
            interestMonthlyPaid: parseFloat(interestMonthlyPaid.toFixed(2)),
            principalMonthlyPaid: parseFloat(principalMonthlyPaid.toFixed(2)),
            finalDebt: parseFloat(finalDebt.toFixed(2)),
            totalInterestPaid: parseFloat(totalInterestPaid.toFixed(2)),
            totalPrincipalPaid: parseFloat(totalPrincipalPaid.toFixed(2))
        });

        initialDebt = finalDebt;
    }

    return monthlyPaymentStat;
};
