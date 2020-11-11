import React from 'react';

const Photo = (props) => {
    return (
        <section>
            <img src = {props.url} alt="A photo from reddit.com/r/aww"/>
        </section>
    )
}

export default Photo