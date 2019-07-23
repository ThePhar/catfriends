import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='bg-light-green dib br3 tc pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <img alt='cats' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
        </div>
    );
};

export default Card;