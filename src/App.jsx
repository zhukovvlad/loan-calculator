import React from "react";

import Calculator from "./components/Calculator/Calculator";

const App = () => {

    return (
        <div className="ui container"  style={{ marginTop: '20px' }}>
            <h1 className="ui center aligned huge header">
                <a href="/">Loan Payment Calculator</a>
            </h1>
            <Calculator />
        </div>
    );
};

export default App;
