import React from 'react';

export const EventComponent = ({ time, image, title, location }) => {
    return (
        <article className="event event-basic">
            <p className="event-time">{time} </p>
            <img
                src={image}
                alt={title}
                className="iconDot"
            />
            <div>
                <h1 className="event-title">{title}</h1>
                <h2 className="event-location">{location}</h2>
            </div>
        </article>
    )
};