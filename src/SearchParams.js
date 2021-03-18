import React, { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');

    const handleChange = (event) => event.target.value;

    console.log('state of location', location);
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="locationn">
                    <input
                        type="text"
                        value={location}
                        id={'location'}
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}
                        placeholder={'Location'}
                    />
                </label>
            </form>
        </div>
    );
};

export default SearchParams;
