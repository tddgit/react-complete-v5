import React from 'react';
import Pet from './Pet';

// eslint-disable-next-line react/prop-types
const App = () => {
    return React.createElement('div', { id: 'something-important' }, [
        React.createElement('h1', {}, 'Adopt me'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'Havanese',
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Havanese',
        }),
        React.createElement(Pet, {
            name: 'Depper',
            animal: 'Cat',
            breed: 'Havanese',
        }),
    ]);
};

export default App;
