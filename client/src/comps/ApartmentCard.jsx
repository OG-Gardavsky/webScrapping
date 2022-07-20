import React from 'react';

export const ApartmentCard = ({title, imgUrl, url}) => {
    return<>
            <a href={url} target={"_blank"}>
                <h1>{title}</h1>
                <img src={imgUrl}/>
            </a>

        </>
}