import React from 'react';

function Header(props) {

    return(
        <div className="row">
            <h1>{ props.headerName }</h1>
        </div>
    );
}

export default Header;