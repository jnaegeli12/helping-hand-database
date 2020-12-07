import React, { useState } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import ButtonContext from '../utils/ButtonContext';

export default function Home() {
    const [alert, setAlert] = useState({
        display: false,
        type: "all",
        onClick: (type, display) => setAlert({...alert, type, display})
    });
    
    return(
        <ButtonContext.Provider value={alert}>

                <div className="container container-fluid">
                    <Header headerName={"What Do You Need?"}/>
                    <Content />
                </div>
                
        </ButtonContext.Provider>
    )
};