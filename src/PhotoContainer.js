import React from "react";
import Photo from "./Photo";

const PhotoContainer = props => 
{
    const displayPhotos = () => 
    {
        return props.photos.map(photo => 
            {
            return <Photo key = {photo} 
            url = {photo} />;
        });

    };

    return(
        <>
        <section>{displayPhotos()} </section>
        </>
    )
}

export default PhotoContainer