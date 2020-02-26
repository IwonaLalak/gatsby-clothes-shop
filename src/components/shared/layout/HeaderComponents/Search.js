import React from 'react';
import {IconSearch} from "../../icons/FontAwesomeIcons";
import {navigate} from 'gatsby';

const Search = () => {

    const searchInput = React.createRef();

    const onSubmitSearch = (e) => {
        e.preventDefault();
        if (searchInput.current.value.length > 0 && searchInput.current.value.length < 100) {
            navigate("/search", {state: {searchedValue:searchInput.current.value}});
        }
    };

    return (
        <div id={'search-nav'}>
            <form onSubmit={onSubmitSearch}>
                <input type={'search'} ref={searchInput} placeholder={'product or category'}/>
                <button type={'submit'}><IconSearch/></button>
            </form>
        </div>
    );
};

export default Search;