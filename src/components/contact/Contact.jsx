import { useState } from "react";
import "./contact.scss"
import {Mail, Person,WhatsApp,LinkedIn,GitHub, Email,ContactMail} from "@material-ui/icons"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.jpg" alt="" />
            </div>
            <div className="right">
                <h2 className="gradient-heading">Contact Me</h2>
                <div className="contact-info">
                    <p className="personal-email"><span><Email className="icon" /></span> jahannabila690@gmail.com (Personal)</p>
                    <p className="university-email"><span><ContactMail className="icon" /></span> SWE1909759@xmu.edu.my (University)</p>
                    <p className="whatsapp"><span><WhatsApp className="icon" /></span> 01112450795</p>
                    <p className="linkedin"><span><LinkedIn className="icon" /></span><a href="https://www.linkedin.com/in/nabila-jahan-9591a8286/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
                    <p className="github"><span><GitHub className="icon" /></span> <a href="https://github.com/Nabila861" target="_blank" rel="noreferrer">Github Profile</a></p>
                </div>
            </div>
        </div>
    )
}
