export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    const monthlyPaymentStat = [];


    const monthRate = parseFloat(interestRate).toFixed(2)/12/100;

    const annuityCoeff = (monthRate * Math.pow(1 + monthRate, borrowTerm) / (Math.pow(1 + monthRate, borrowTerm) - 1)).toFixed(7);

    console.log(annuityCoeff);

    let initialDebt = amountToBorrow;

    const totalMonthlyPayment = amountToBorrow * annuityCoeff;

    console.log(Math.ceil(totalMonthlyPayment));

    for (let i = 1; i <= borrowTerm; i++) {
        let interestMonthlyPaid = initialDebt * monthRate;
        let principalMonthlyPaid = totalMonthlyPayment - interestMonthlyPaid;
        let finalDebt = initialDebt - principalMonthlyPaid;

        monthlyPaymentStat.push({
            initialDebt: initialDebt,
            interestMonthlyPaid: interestMonthlyPaid,
            principalMonthlyPaid: principalMonthlyPaid,
            finalDebt: finalDebt
        });

        initialDebt = finalDebt;
    }

    return monthlyPaymentStat;
};
