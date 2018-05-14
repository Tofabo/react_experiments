import React from 'react';
import Link from '../Link/Link';
import './NavBar.css';

const navbar = () => {
    return (
        <div className="NavBar">
            <Link path='/blog'>Blog</Link>
            <Link path='/web_comic'>Webcomic</Link>
            <Link path='/art'>Art</Link>
        </div>
    );
}

export default navbar;