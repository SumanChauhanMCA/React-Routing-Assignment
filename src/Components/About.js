import React from "react";
import Navbar from "./Navbar";

const About = () => {
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
                <section className="hero">
                    <div className="hero-card">
                        <h1>About this project</h1>
                        <p>
                            Creating a React application using the React Router in which we make a four-page Home, About, User Info, and Not Found Page.
                        </p>
                        <p>
                            Home and About Page:
                            Create both pages with your mind, but the UI is attractive
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About