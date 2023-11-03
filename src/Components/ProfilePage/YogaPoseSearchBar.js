import React, {useState} from 'react';
import './YogaPoseSearchBar.css';

function YogaPoseSearchBar({setYogaPoseHandler}) {
    const [searchQuery, setSearchQuery] = useState('');

    function onFormSubmit(e) {e.preventDefault();
        console.log('submitted');

        setYogaPoseHandler(searchQuery);
    }


    return  (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <header> Yogapose search </header>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        name="search a yogapose"
                        placeholder="Search any yogapose of your choice"
                    />
            <button type="submit">
                Yogapose Search
            </button>

        </form>

    );
}
export default YogaPoseSearchBar;