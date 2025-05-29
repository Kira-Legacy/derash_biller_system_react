import React, { useState } from 'react';
import './GetandPost.css';

function GetandPost(){

    const [billId, setBillId] = useState("");

    const handleBillidChange = (event) => {
        setBillId(event.target.value);
    }

    const handleGetId = async (event) => {
        event.preventDefault();
        console.log("Submitting ", {billId});

        try {
            const response = await fetch("http://localhost:3001/getbill", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({billId}),
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="container">
        <h2 className="upload">What would you like to do today?</h2>

        <form action="/getbill" method="get" onSubmit={handleGetId}>
            <div className="getBillDiv mt-4">
                <div className="getBillInput">
                    <input type="text" id="billId" name="billId" placeholder="Enter Bill ID" required
                        autoComplete="off" value={billId} onChange={handleBillidChange} />
                </div>
                <div className="getBillButtonDiv">
                    <button id="getBillButton" type="submit" className="btn btn-success pt-1 form-control-sm">Get
                        Bill</button>
                </div>
            </div>
        </form>
        <button id="postBillButton" className="btn btn-info">Post a Bill</button>
    </div>
    )
}

export default GetandPost;