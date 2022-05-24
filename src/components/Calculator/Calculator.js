import React, { Fragment, useState } from "react";

import InputForm from "../InputForm/InputForm";

const Calculator = () => {
    const [amountToBorrow, setAmountToBorrow] = useState('');
    const [borrowTerm, setBorrowTerm] = useState('');

    return(
        <Fragment>
            <InputForm
                amountToBorrow={amountToBorrow}
                setAmountToBorrow={setAmountToBorrow}
                borrowTerm={borrowTerm}
                setBorrowTerm={setBorrowTerm}
            />
        </Fragment>
    );
};

export default Calculator;