import React from 'react';

// eslint-disable-next-line react/prop-types
/**
 * @param root0
 * @param root0.name
 * @param root0.animal
 * @param root0.breed
 * @example
 */
export default function Pet({ name, animal, breed }) {
    return React.createElement('div', {}, [
        // eslint-disable-next-line react/prop-types
        React.createElement('h1', {}, name),
        // eslint-disable-next-line react/prop-types
        React.createElement('h1', {}, animal),
        // eslint-disable-next-line react/prop-types
        React.createElement('h1', {}, breed),
    ]);
}
