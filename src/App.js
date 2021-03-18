import React from 'react';
import Pet from './Pet';
import SearchParams from './SearchParams';

// eslint-disable-next-line react/prop-types
const App = () => {
    // return React.createElement('div', { id: 'something-important' }, [
    //     React.createElement('h1', {}, 'Adopt me'),
    //     React.createElement(Pet, {
    //         name: 'Luna',
    //         animal: 'Dog',
    //         breed: 'Havanese',
    //     }),
    //     React.createElement(Pet, {
    //         name: 'Pepper',
    //         animal: 'Bird',
    //         breed: 'Havanese',
    //     }),
    //     React.createElement(Pet, {
    //         name: 'Depper',
    //         animal: 'Cat',
    //         breed: 'Havanese',
    //     }),
    // ]);
    return (
        // <div>
        //     <h1 id={'something important'}>Adopt me</h1>
        //     <Pet name={'Luna'} animal={'Dog'} breed={'Havanese'} />
        //     <Pet name={'Pepper'} animal={'Bird'} breed={'Havanese'} />
        //     <Pet name={'Depper'} animal={'Cat'} breed={'Havanese'} />
        // </div>
        <div>
            <h1 id={'something-important'}>Adopt me</h1>
            <SearchParams />
        </div>
    );
};

export default App;
