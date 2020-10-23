import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div class="background-hero-page"></div>
            {children}
            <Footer />
        </>
    )
}

export default Layout
