import React from 'react';
import {Link} from 'react-router-dom';
import './Link.css';

const link = (props) => {
    return (
        <Link className="Link" onClick={props.clicked} to={props.path}>{props.children}</Link>
    );
}

export default link;