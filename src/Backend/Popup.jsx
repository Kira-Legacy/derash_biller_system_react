import React from "react";
import "./Popup.css"

function Popup() {
    return (
        <div className="popup">
            <h2>Post a Bill</h2>
            <p>Inorder to post a bill you will need to fill in the following informations.<span style={{color: "red" }}> *</span> </p>
            <form action="/postbill" method="post">
                <label for="postbillId">Bill ID:</label>
                <input type="number" id="billIdInput" name="bill_id" required autocomplete="off" /><br /><br />

                <label for="bill_desc">Bill Description: </label>
                <input type="text" id="bill_desc" name="bill_desc" required autocomplete="off" /><br /><br />

                <label for="reason">Reason: </label>
                <input type="text" id="reason" name="reason" required autocomplete="off" /><br /><br />

                <label for="amount_due">Amount Due: </label>
                <input type="number" id="amount_due" name="amount_due" required autocomplete="off" /><br /><br />

                <label for="due_date">Due Date:</label>
                <input type="date" id="due_date" name="due_date" required autocomplete="off" /><br /><br />

                <label for="partial_pay_allowed">Partial pay allowed: </label>
                <select id="partial_pay_allowed" name="partial_pay_allowed" required>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select> <br /><br />

                <label for="customer_id">Customer Id: </label>
                <input type="number" id="customer_id" name="customer_id" required autocomplete="off" /><br /><br />

                <label for="name">Name: </label>
                <input type="text" id="name" name="name" required autocomplete="off" /><br /><br />

                <label for="mobile">Mobile: </label>
                <input type="number" id="mobile" name="mobile" required autocomplete="off" /><br /><br />
                
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" required autocomplete="off" /><br /><br />

                <button class="closeButton btn btn-danger">Close</button>
                <input type="submit" value="Submit" class="btn btn-warning" />
            </form>
        </div>
    )
}

export default Popup;