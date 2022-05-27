export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    const monthlyPaymentStat = [];  // We will write here all information about payments in current period

    const monthRate = parseFloat((interestRate/12/100));
    const annuityCoeff = parseFloat(monthRate * Math.pow(1 + monthRate, parseFloat(borrowTerm)) / (Math.pow(1 + monthRate, parseFloat(borrowTerm)) - 1));

    console.log('Type of annuitycoeff ', annuityCoeff);

    let initialDebt = parseFloat(amountToBorrow);

    console.log('Very initial debt type ', typeof(initialDebt));

    const totalMonthlyPayment = Math.ceil(amountToBorrow * annuityCoeff);

    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    console.log(totalMonthlyPayment);
    console.log('Type of monthlyPayment ', typeof(totalMonthlyPayment));

    for (let i = 1; i <= borrowTerm; i++) {
        let interestMonthlyPaid = parseFloat((initialDebt * monthRate).toFixed(2));
        let principalMonthlyPaid = parseFloat((totalMonthlyPayment - interestMonthlyPaid).toFixed(2));
        let finalDebt = parseFloat((initialDebt - principalMonthlyPaid).toFixed(2));
        // if (totalMonthlyPayment > initialDebt + interestMonthlyPaid) {
        //     principalMonthlyPaid = initialDebt - interestMonthlyPaid;
        //     finalDebt = 0;
        // }

        if (initialDebt < totalMonthlyPayment) {
            principalMonthlyPaid = initialDebt;
            finalDebt = 0;
        }

        totalInterestPaid += parseFloat(interestMonthlyPaid.toFixed(2));
        totalPrincipalPaid += principalMonthlyPaid;
        

        monthlyPaymentStat.push({
            initialDebt: initialDebt,
            interestMonthlyPaid: interestMonthlyPaid,
            principalMonthlyPaid: principalMonthlyPaid,
            finalDebt: finalDebt,
            totalInterestPaid: totalInterestPaid,
            totalPrincipalPaid: totalPrincipalPaid
        });

        initialDebt = finalDebt;
    }

    return monthlyPaymentStat;
};
