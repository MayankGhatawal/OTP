import React , { useState } from "react";

function Logingenrate() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSumbit = (event) => {
        event.preventDefault();

        // phone Validation 
        const regex = /[^0-9]/g;
        if ((phoneNumber.length > 0) || regex.test(phoneNumber)){
            alert("Invalid phone number");
            return;
        }

        setShowOtpInput(true);

        const onOtpSubmit = (otp) => {
            console.log("Login Successful", otp);
          };

    };
    return(
        <>
            <p>Phone OTP Sumbit</p>
            {!showOtpInput? (<form onSubmit={handlePhoneSumbit} className="form">
                <input type="text" value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter phone number..."
                />
                <button type="sumbit">Sumbit</button>
            </form> ) : (
                <div>
                <p>Enter OTP Sent to {phoneNumber}</p>
                </div>
            )}
        </>
    )
}

export default Logingenrate