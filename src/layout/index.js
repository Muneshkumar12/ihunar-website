import React from 'react';
import { Navbar, Footer } from '../components'
const Layout = ({ children, bgColor }) => {
    return (
        <div>
            <Navbar bgColor={bgColor} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
