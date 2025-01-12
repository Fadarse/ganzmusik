import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
return (

    <Router>
        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>

        </Routes>
    </Router>
);
 
}

export default App;
