export const getAnnuityCoeff = (amountToBorrow, borrowTerm, interestRate) => {
    const monthRate = parseFloat(interestRate).toFixed(2)/12/100;

    console.log("BorrowTerm Type ", typeof(borrowTerm));

    const annuityCoeff = (monthRate * Math.pow(1 + monthRate, borrowTerm) / (Math.pow(1 + monthRate, borrowTerm) - 1)).toFixed(7);

    return annuityCoeff;
};
