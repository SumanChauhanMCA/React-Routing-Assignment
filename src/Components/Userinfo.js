import React from "react";
import Navbar from "./Navbar";

const Userinfo = () => {
    return (
        <div>
            <header className="header">
                <div className="container nav">
                    <a className="brand">
                        <div className="logo" aria-hidden="true"></div>
                        Assignment 4
                    </a>

                    <label htmlFor="menu-toggle" className="menu-btn" aria-label="Open menu">
                        <span></span>
                    </label>
                    <input id="menu-toggle" type="checkbox" hidden />

                    <Navbar />
                </div>


            </header>
            <main className="container section">
                <h1 className="title">User Profile</h1>
                <div className="profile">

                    <img src="/profile.jpg" alt="User Photo" />

                    <div className="profile-details">
                        <h2>Sam Jam</h2>
                        <p><strong>Age:</strong> 29</p>
                        <p><strong>Date of Birth:</strong> 12 March 1996</p>
                        <p><strong>Email:</strong> sam.jam@gmsil.com</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <p><strong>Location:</strong> Mumbai, India</p>

                        <div className="profile-bio">
                            Sam is a software engineer with 3+ years of experience in web development.
                            He enjoys coding, dancing, and traveling to new places.
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Userinfo