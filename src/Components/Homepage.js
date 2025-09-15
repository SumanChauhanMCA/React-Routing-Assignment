import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
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
                        <h1>This is home page</h1>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Homepage