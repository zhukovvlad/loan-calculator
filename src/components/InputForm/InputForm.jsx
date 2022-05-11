import React, { useState } from "react";

const InputForm = (props) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!Number(term)) {
            return;
        };

        props.onFormSubmit(term);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <label>Debt Sum</label>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
        </div>
    );
};

export default InputForm;