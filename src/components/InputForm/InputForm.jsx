import React from "react";

const InputForm = props => {

    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="three fields">
                    <div className="field">
                        <label htmlFor="amountToBorrow">Borrow Sum</label>
                        <input
                            id="amountToBorrow"
                            type="text"
                            value={props.amountToBorrow}
                            onChange={(e) => {
                                if (!isNaN(+e.target.value)) {
                                    props.setAmountToBorrow(e.target.value)
                                }
                                return}
                            }
                            placeholder="Input total amount of debt"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="borrowTerm">Borrow Term</label>
                        <input
                            id="borrowTerm"
                            type="text"
                            value={props.borrowTerm}
                            onChange={(e) => {
                                if (!isNaN(+e.target.value)) {
                                    props.setBorrowTerm(e.target.value)
                                }
                                return}}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="interestRate">Interest Rate</label>
                        <input
                            id="interestRate"
                            type="text"
                            value={props.interestRate}
                            onChange={(e) => {
                                if (!isNaN(+e.target.value)) {
                                    props.setInterestRate(e.target.value)
                                }
                                return}}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputForm;