import React, { useState } from "react";

function Logingenrate() {
    const [phoneNumber, setPhoneNumber] = useState("")

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSumbit = () => {};
    return(
        <>
            <p>Phone OTP Sumbit</p>
            <form onSubmit={() => {}} className="form">
                <input type="text" value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter phone number..."
                />
                <button type="sumbit">Sumbit</button>
            </form>
        </>
    )
}

export default Logingenrate