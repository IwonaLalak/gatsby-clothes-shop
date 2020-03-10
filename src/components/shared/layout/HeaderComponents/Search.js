import React from 'react';
import {IconSearch} from "../../icons/FontAwesomeIcons";
import {navigate} from 'gatsby';
import {Button, FormControl} from "react-bootstrap";

const Search = () => {

    const searchInput = React.createRef();

    const onSubmitSearch = (e) => {
        e.preventDefault();
        if (searchInput.current.value.length > 0 && searchInput.current.value.length < 100) {
            navigate("/search", {state: {searchedValue: searchInput.current.value}});
        }
    };

    return (
        <div id={'search-nav'}>
            <form onSubmit={onSubmitSearch}>
                <FormControl type={'search'} ref={searchInput} placeholder={'Category or product'}/>
                <Button variant={'default'} type={'submit'}><IconSearch/></Button>
            </form>
        </div>
    );
};

export default Search;