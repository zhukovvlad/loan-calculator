import React, { useState } from "react";

import InputForm from "./components/InputForm/InputForm";

const App = () => {
    const [debt, setDebt] = useState('');

    const onTermSubmit = term => {
        setDebt(term);
    };

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <InputForm onFormSubmit={onTermSubmit} />
            <div>
                {debt}
            </div>
        </div>
    );
};

export default App;
