import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, age, id, image } = person;
        return (
          <article className='person'>
            <img src={image} alt='' />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
