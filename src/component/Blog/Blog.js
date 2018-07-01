import React from 'react';
import classes from './Blog.css';

const blog = () => {
    return(
        <div className={classes.Blog}>
            <h1>Blog</h1>
            <p>Hello, this is my blog!</p>
            <p>No backend needed for this! lol</p>
            <p>hard coded AF</p>
        </div>
    );
}

export default blog;