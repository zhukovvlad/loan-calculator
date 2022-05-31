import React, { Fragment, useState } from "react";

import InputForm from "../InputForm/InputForm";
import PaymentTable from "../PaymentTable/PaymentTable";

const Calculator = () => {
    const [amountToBorrow, setAmountToBorrow] = useState('');
    const [borrowTerm, setBorrowTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');

    return(
        <Fragment>
            <InputForm
                amountToBorrow={amountToBorrow}
                setAmountToBorrow={setAmountToBorrow}
                borrowTerm={borrowTerm}
                setBorrowTerm={setBorrowTerm}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
            />
            <PaymentTable
                amountToBorrow={amountToBorrow}
                borrowTerm={borrowTerm}
                interestRate={interestRate}
            />
        </Fragment>
    );
};

export default Calculator;
