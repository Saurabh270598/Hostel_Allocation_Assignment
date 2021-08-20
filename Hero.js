import React from 'react';
const Hero=({handleLogout})=>{
    return (
        <section classname="hero">
            <nav>
                <button onClick={handleLogout} >Logout</button>
            </nav>
            <p>Choose Your Hostel </p>
        </section>
    );
};
export default Hero;