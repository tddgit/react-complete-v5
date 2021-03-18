import React from 'react';

/**
 * @param root0
 * @param root0.name
 * @param root0.animal
 * @param root0.breed
 * @example
 */
// eslint-disable-next-line react/prop-types
export default function Pet({ name, animal, breed }) {
    // return React.createElement('div', {}, [
    //     // eslint-disable-next-line react/prop-types
    //     React.createElement('h1', {}, name),
    //     // eslint-disable-next-line react/prop-types
    //     React.createElement('h1', {}, animal),
    //     // eslint-disable-next-line react/prop-types
    //     React.createElement('h1', {}, breed),
    // ]);
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h3>{breed}</h3>
        </div>
    );
}
