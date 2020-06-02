import React from 'react';

const cockpit = (props) => {
    const styleBtn = {
        backgroundColor: 'green',
        color: 'white',
        padding: '8px',
        cursor: 'pointer',
    };
    return (
        <div>
            <h1>Persons Manager:-</h1>
            <button style={styleBtn} onClick={props.clicked}>Toggle Viewer</button>
        </div>
    );
}

export default cockpit;