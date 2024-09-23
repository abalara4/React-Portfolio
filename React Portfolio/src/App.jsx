import React from 'react';
import Header from './components/Header'; // Adjust the path as necessary
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;