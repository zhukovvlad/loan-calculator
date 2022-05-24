import React from "react";

const InputForm = props => {

    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="three fields">
                    <div className="field error">
                        <label htmlFor="amountToBorrow">Borrow Sum</label>
                        <input
                            id="amountToBorrow"
                            type="number"
                            value={props.amountToBorrow}
                            onChange={(e) => props.setAmountToBorrow(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="borrowTerm">Borrow Term</label>
                        <input
                            id="borrowTerm"
                            type="number"
                            value={props.borrowTerm}
                            onChange={(e) => props.setBorrowTerm(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="interestRate">Interest Rate</label>
                        <input
                            id="interestRate"
                            type="number"
                            value={props.interestRate}
                            onChange={(e) => props.setInterestRate(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputForm;