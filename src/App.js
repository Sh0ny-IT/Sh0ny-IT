// import logo from './logo.svg';
import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogz} from './components/Dialogz/Dialogz';
import {Profile} from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Dialogz/>
                {/*<Profile/>*/}
            </div>

        </div>

    );
}
export default App





