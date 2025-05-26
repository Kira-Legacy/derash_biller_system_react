import React from 'react';
import './GetandPost.css';

function GetandPost(){
    return(
        <div className="container">
        <h2 className="upload">What would you like to do today?</h2>

        <form action="/getbill" method="get">
            <div className="getBillDiv mt-4">
                <div className="getBillInput">
                    <input type="text" id="billId" name="billId" placeholder="Enter Bill ID" required
                        autocomplete="off" />
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