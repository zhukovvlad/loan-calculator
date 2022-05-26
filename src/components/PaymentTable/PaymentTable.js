import React from "react";

import { getAnnuityCoeff } from "../../utils/utils";

const PaymentTable = ({amountToBorrow, borrowTerm, interestRate}) => {

    console.log(getAnnuityCoeff(amountToBorrow, borrowTerm, interestRate));
    return (
        <div>
            Ola-la
        </div>
    )
};

export default PaymentTable;
