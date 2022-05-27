export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    const monthlyPaymentStat = [];


    const monthRate = parseFloat((interestRate/12/100).toFixed(2));

    console.log('Type monthRate', typeof(monthRate));

    const annuityCoeff = parseFloat(monthRate * Math.pow(1 + monthRate, parseFloat(borrowTerm)) / (Math.pow(1 + monthRate, parseFloat(borrowTerm)) - 1).toFixed(7));

    console.log('Type of annuitycoeff ', typeof(annuityCoeff));

    let initialDebt = parseFloat(amountToBorrow);

    console.log('Very initial debt type ', typeof(initialDebt));

    const totalMonthlyPayment = Math.ceil(amountToBorrow * annuityCoeff);

    console.log(totalMonthlyPayment);
    console.log('Type of monthlyPayment ', typeof(totalMonthlyPayment));

    for (let i = 1; i <= borrowTerm; i++) {
        let interestMonthlyPaid = parseFloat((initialDebt * monthRate).toFixed(2));
        let principalMonthlyPaid = parseFloat((totalMonthlyPayment - interestMonthlyPaid).toFixed(2));
        let finalDebt = parseFloat((initialDebt - principalMonthlyPaid).toFixed(2));
        if (totalMonthlyPayment > initialDebt + interestMonthlyPaid) {
            principalMonthlyPaid = initialDebt - interestMonthlyPaid;
            finalDebt = 0;
        }
        

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
