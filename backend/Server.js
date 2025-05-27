import express from "express";
import session from 'express-session';
import bodyParser from "body-parser";
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3001;
var authorize = false;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// function billUpload(req, res, next) {

//     var userName = req.body["username"];
//     var password = req.body["password"];

//     if (userName === "Kirubelwinner@gmail.com" && password === "Biller#23") {
//             authorize = true;
//             next();
//     }

//     else {
        
//     }

// }

app.use(session({
    secret: 'iknojx9uviygrsivhrc4qzcime765wzn20o9',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
  

app.post("/credentialssubmit", (req, res) => {
   const {username, password } = req.body;
   console.log("Received login attempt:", {username, password });

   if (username === "Kirubelwinner@gmail.com" && password === "Biller#23") {
    req.session.authorize = true;
    res.status(200).json({success: true, message: "Login successful!"});
   } else {
    req.session.authorize = false;
    res.status(401).json({success: false, message: "Invalid username or password."});
   }
});

app.get("/dashboard", (req, res) => {
    if (req.session.authorize) {
        res.status(200).send("Welcome to the Dashboard!");
    } else {
        res.status(403).send("Unauthorized. Please log in.");
    }
});

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXRoaW9waWFuIFJldmVudWVzIGFuZCBDdXN0b21zIEF1dGhvcml0eSIsInN1YiI6IjIxNTUyMSIsInBlcm1pc3Npb25zIjpbIkJJTExFUiJdLCJpc3MiOiJodHRwczovL2FwaS5kZXJhc2guZ292LmV0IiwianRpIjoiNzcyZWI5MTAtYjI2Mi0xMWU4LWFhZTgtODM1ZTg0YjM3MWJiIiwiaWF0IjoxNTM2Mjk5NjYxfQ.k9M2rYdhCc09z27wDCieuYvlYhPHnzv3j75pupok5co';
const apiSecret = 'iknojx9uviygrsivhrc4qzcime765wzn20o9';

app.get("/getbill", async (req, res) => {
    const billIDInput = req.query["billId"];
    const apiUrl = `https://api.qa.derash.gov.et/biller/customer-bill-data?bill_id=${billIDInput}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                "api-key": apiKey,
                "api-secret": apiSecret,
            }
        });

        const billData = response.data;
        console.log(billData);
        res.render("billerpage.ejs", { billData: billData });
    } catch (error) {
        console.error(error);
        res.render("billerpage.ejs", { error: `There is no bill with this bill ID of: ${billIDInput}` });
    }
});

app.post("/postbill", async (req, res) => {
    const billID = req.body["bill_id"];
    const billDesc = req.body["bill_desc"];
    const reason = req.body["reason"];
    const amountDue = req.body["amount_due"];
    const dueDate = req.body["due_date"];
    const partialPaymentAllowed = !!req.body["partial_pay_allowed"];
    const customerId = req.body["customer_id"];
    const name = req.body["name"];
    const mobile = req.body["mobile"];
    const email = req.body["email"];
    console.log(req.body);

    const apiURL = 'https://api.qa.derash.gov.et/biller/customer-bill-data';

    try {
        const response = await axios.post(apiURL, {
            bill_id: billID,
            bill_desc: billDesc,
            reason: reason,
            amount_due: amountDue,
            due_date: dueDate,
            partial_pay_allowed: partialPaymentAllowed,
            customer_id: customerId,
            name: name,
            mobile: mobile,
            email: email,
        }, {
            headers: {
                "api-key": apiKey,
                "api-secret": apiSecret,
                'Content-Type': 'application/json'
            }
        });

        console.log("Bill was created successfully");

        const confirmationCode = response.data.confirmation_code;

        res.render("billerpage.ejs", { billID, confirmationCode });

    } catch (errorUpload) {
        console.error("Error posting bill data:", errorUpload);
        if (errorUpload.response.data.statusCode === 409) {
            res.render("billerpage.ejs", { errorUpload: `There was an error uploading the bill because the bill id ${billID} already exists.` });
        }
        else if (errorUpload.response.data.statusCode === 400) {
            res.render("billerpage.ejs", { errorUpload: "There was an error uploading the bill because mobile number should be in 09XXXXXXXX or 07XXXXXXXX format." })
        }
        else {
            res.render("billerpage.ejs", { errorUpload: "There was an error uploading the bill." });
        }
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.render('billerpage.js');
        }
        res.render('index.ejs');
    });
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});