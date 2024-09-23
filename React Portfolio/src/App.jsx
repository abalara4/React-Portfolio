import React from 'react';
import Header from './components/Header'; // Adjust the path as necessary
import { Outlet } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default App;