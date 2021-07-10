import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        buttonText: 'Send a Message',
        sent: false,
        err: ''
    });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }


    const submitEmail = async (e) => {
        e.preventDefault();

        setMailerState({
            ...mailerState,
            buttonText: 'Is sending...'
        })

        console.log({ mailerState });

        // eslint-disable-next-line no-unused-vars
        const response = await fetch("http://localhost:3001/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }),
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);

                if (resData.status === "success") {

                    setMailerState({
                        ...mailerState,
                        buttonText: 'Sent Successfully',
                        sent: true,
                        err: 'success'
                    })

                    setTimeout(() => {
                        resetForm();
                    }, 5000)

                    // alert("Message Sent");
                } else if (resData.status === "fail") {

                    setMailerState({
                        ...mailerState,
                        buttonText: 'Faild, Try again',
                        sent: false,
                        err: 'fail',
                    })

                    setTimeout(() => {
                        resetForm();
                    }, 5000)
                }
            })
    };

    const resetForm = () => {
        setMailerState({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false,
            buttonText: 'Send a Message NOW',
            err: ''
        });
    }



    return (
        <div>

            <h1>Let's Talk.</h1>

            <div className="contactwrap">
                <div className="contactin">
                    <h1>ContactFormInfo </h1>

                    <span className="iContact">
                        <i className="fa fa-phone-alt" aria-hidden="true"></i>
                    </span>

                    <p>+972 54-6334554</p>

                    <span className="iContact">
                        <i className="fas fa-map-pin" aria-hidden="true"></i>
                    </span>
                    <p> Central, Israel</p>
                </div>

                <div className="contactin">
                    <form>
                        <input required type="text" className="contactin-input" placeholder="Full Name" name="name" value={mailerState.name} onChange={handleStateChange} />
                        <input required type="text" className="contactin-input" placeholder="Phone Number" name="phone" value={mailerState.phone} onChange={handleStateChange} />
                        <input required type="email" className="contactin-input" placeholder="Email" name="email" value={mailerState.email} onChange={handleStateChange} />
                        <textarea className="contactin-textarea" name="message" placeholder="Message" value={mailerState.message} onChange={handleStateChange}></textarea>
                        <button type="submit" value="Submit" className="contactin-btn" onClick={submitEmail}>{mailerState.buttonText}</button>
                    </form>
                </div>


                {/* <div className="contactin">
                <iframe title="Gmaps" frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
                    src={API_URL} ></iframe>
            </div> */}




            </div>

        </div>
    );
};

export default ContactForm;