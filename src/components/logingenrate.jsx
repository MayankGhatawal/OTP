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
        const phoneRegex = /[^0-9]/g;
        if ((phoneNumber.length > 0) || phoneRegex.test(phoneNumber)){
            alert("Invalid phone number");
            return;
        }

        setShowOtpInput(true);

    };
    return(
        <>
            <p>Phone OTP Sumbit</p>
            {!showOtpInput ? <form onSubmit={handlePhoneSumbit} className="form">
                <input type="text" value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter phone number..."
                />
                <button type="sumbit">Sumbit</button>
            </form>: <div></div>}
        </>
    )
}

export default Logingenrate