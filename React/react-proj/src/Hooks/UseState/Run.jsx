import React, { useState } from "react";

function Run() {
    const [run, setRun] = useState(0);
    const [wicket, setWicket] = useState(0);

    function handleRunChange(runsToAdd) {
        if (wicket < 10) {
            setRun(prevRun => prevRun + runsToAdd);
        }
    }

    function handleWicket() {
        if (wicket < 10) {
            setWicket(prevWicket => prevWicket + 1);
        }
    }

    function resetMatch() {
        setRun(0);
        setWicket(0);
    }

    const isAllOut = wicket === 10;

    return (
        <div style={{ margin: "30px 450px" }}>
            <h2>Scoreboard: {run} / {wicket}</h2>
            {isAllOut && <h3 style={{ color: "red" }}>All Out!</h3>}

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                {/* Run Buttons */}
                <button disabled={isAllOut} onClick={() => handleRunChange(0)}>0</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(1)}>1</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(2)}>2</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(3)}>3</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(4)}>4</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(5)}>5</button>
                <button disabled={isAllOut} onClick={() => handleRunChange(6)}>6</button>

                {/* Wicket Button */}
                <button 
                    disabled={isAllOut} 
                    onClick={handleWicket} 
                    style={{ backgroundColor: "#f97316", color: "white" }}
                >
                    Wicket (OUT)
                </button>

                {/* Reset Button */}
                <button 
                    onClick={resetMatch} 
                    style={{ backgroundColor: "#ef4444", color: "white" }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Run;