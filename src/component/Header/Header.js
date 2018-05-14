import React from 'react';
import classes from './Header.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <h1>Hi! New header!</h1>
        </div>
    );
}

export default header;