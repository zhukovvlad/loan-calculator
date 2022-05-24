import React from "react";

import { getAnnuityCoeff } from "../../utils/utils";

const PaymentTable = ({amountToBorrow, borrowTerm, interestRate}) => {
    return (
        <div>
            {getAnnuityCoeff(amountToBorrow, borrowTerm, interestRate)}
        </div>
    )
};

export default PaymentTable;
