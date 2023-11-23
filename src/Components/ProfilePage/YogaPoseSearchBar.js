import React, {useState} from 'react';
import Button from '../Button/Button';
import './YogaPoseSearchBar.css';

function YogaPoseSearchBar({callFunction}) {


    const [searchQuery, setSearchQuery] = useState('');

    function onFormSubmit(e) {e.preventDefault();



        console.log('submitted');


        callFunction(searchQuery);
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
            <Button
                type={"submit"}
                disabled={!searchQuery}
            >
                SEARCH
            </Button>

        </form>

    );
}
export default YogaPoseSearchBar;