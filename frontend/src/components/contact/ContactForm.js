import React, { useState } from 'react'
import axios from 'axios';
import './contact.scss';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_CDNwS3AhURt_DYDLUBEiA&key=${API_KEY}&language=en`;

const ContactForm = () => {
    const [data, setData] = useState({ name: '', email: '', phone: '', message: '', sent: false, buttonText: "Send a Message", err: '' })


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
 
 // eslint-disable-next-line
        if (data.name == "" || data.email == "" || data.phone == "" || data.message == "" ) {
            setData({
                ...data,
                buttonText: 'Please fill all the fields',
                sent: false,
                err: 'fail'
            })
            setTimeout(() => {
                resetForm()
            }, 3000)
        } else {
            setData({
            ...data,
            buttonText: "Is sending..."
        })
        

        axios.post('/api/sendmail', data)
            .then(res => {
                if (res.data.result !== 'success') {
                    setData({
                        ...data,
                        buttonText: "Failed, Try Again",
                        sent: false,
                        err: 'fail'
                    })
                    setTimeout(() => {
                        resetForm()
                    }, 6000)
                } else {
                    setData({
                        ...data,
                        sent: true,
                        buttonText: "Message Sent",
                        err: 'success'
                    })
                    setTimeout(() => {
                        resetForm();
                    }, 6000)
                }
            }).catch((err) => {

                setData({
                    ...data,
                    buttonText: "Failed, Try Again",
                    err: 'fail'
                })
            })}
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            phone: '',
            message: '',
            sent: false,
            buttonText: 'Send a Message',
            err: ''
        });
    }



    return (
        <div className="contactSection">
            <div className="container">
                <h1>Let's Talk.</h1>

                <div className="contactItems">
                    <span className="iContact">
                        <i class="fa fa-phone-alt" aria-hidden="true"></i>
                    </span>

                    <p>+972 54-6334554</p>

                    <span className="iContact">
                        <i class="fas fa-map-pin" aria-hidden="true"></i>
                    </span>

                    <p>Central, Israel</p>
                </div>



                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="name" value={data.name} onChange={handleChange} required></input>
                            <span className="text">Full Name</span>
                            <span className="line"></span>
                        </div>
                    </div>

                </div>

                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="phone" value={data.phone} onChange={handleChange} required></input>
                            <span className="text">Phone number</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input type="text" name="email" value={data.email} onChange={handleChange} required></input>
                            <span className="text">Email</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <div className="inputBox textarea">
                            <textarea name="message" value={data.message} onChange={handleChange} required></textarea>
                            <span className="text">Type here.</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <button
                            type="submit"
                            // value="sendNow"
                            onClick={formSubmit}
                            className="submitBtn">
                            {data.buttonText}
                        </button>
                    </div>
                </div>

            </div>
        </div>


        // <div>
        //     <div>
        //         <h1>Let's Talk.</h1>
        //     </div>
        //     <div className="contactwrap">


        //         <div className="contactin"></div>

        //         <div className="contactin">
        //             <form>
        //                 <input required type="text" class="contactin-input" placeholder="Full Name" name="name" value={data.name} onChange={handleChange} />
        //                 <input required type="text" class="contactin-input" placeholder="Phone Number" name="phone" value={data.phone} onChange={handleChange} />
        //                 <input required type="text" class="contactin-input" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
        //                 <textarea class="contactin-textarea" name="message" placeholder="Message" value={data.message} onChange={handleChange}></textarea>
        //                 <button type="submit" value="Submit" class="contactin-btn" onClick={formSubmit}>{data.buttonText}</button>
        //             </form>
        //         </div>


        /* <div className="contactin">
       <iframe title="Gmaps" frameborder="0" loading="lazy" allowfullscreen width="100%" height="auto"
           src={API_URL} ></iframe>
   </div>  */




        /* </div>
     </div> */
    );
};

export default ContactForm;