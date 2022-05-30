import React from "react";

import Calculator from "./components/Calculator/Calculator";

const App = () => {

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <h1 className="ui center aligned huge header">Loan Payment Calculator</h1>
            <Calculator />
        </div>
    );
};

export default App;
