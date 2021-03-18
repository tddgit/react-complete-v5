import React from 'react';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams.jsx';
import DetailsWithErrorBoundary from './DetailsWithErrorBoundary.jsx';

const Page = () => {
    return <h1>PAGE</h1>;
};

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
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt me</Link>
                    {/* <Link to={'/details'}>Details</Link> */}
                </header>

                <Router>
                    <SearchParams path="/" />
                    {/* <Page path="details" /> */}
                    <DetailsWithErrorBoundary path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

export default App;
