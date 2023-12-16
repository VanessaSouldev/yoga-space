import React, {useState} from 'react';
import Button from '../Button/Button';
import './YogaPoseSearchBar.css';

function YogaPoseSearchBar({callFunction}) {


    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(false);

    function onFormSubmit(e) {
        e.preventDefault();

        console.log('submitted');

        callFunction(searchQuery);
        if (!searchQuery) {
            setError(true);
        }
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
                >
                SEARCH
            </Button>
            {searchQuery === '' && error === true && callFunction && <p className="error-input-yogapose">Please enter a yogapose above to view video's for a specific pose</p>}
        </form>

    );
}
export default YogaPoseSearchBar;