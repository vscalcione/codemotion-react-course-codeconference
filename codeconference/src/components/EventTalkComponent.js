import React from 'react';

export const EventTalkComponent = ({ time, title, image, person }) => {
    return (
        <article className="event">
            <a href="#">
                <p className="event-time">{time} </p>
                <img
                    src={image}
                    alt={person}
                    className="iconDot"
                />
                <div>
                    <h2 className="event-person">{person}</h2>
                    <h1 className="event-title">{title}</h1>
                </div>
            </a>
        </article>
    )
};