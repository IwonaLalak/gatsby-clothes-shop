import React from 'react';
import {searchProductsOrCategories} from "../../../services/SearchService";
import {Link} from 'gatsby'

class SearchView extends React.Component {

    state = {
        data: []
    };

    componentDidMount() {

        this.searchResults();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searched !== this.props.searched) {
            this.searchResults()
        }
    };

    searchResults = () => {
        if (Boolean(this.props.searched)) {
            searchProductsOrCategories(this.props.searched)
                .then(({data}) => {
                    this.setState({data})
                })
                .catch(error => console.log(error))
        }
    };

    render() {

        let {data} = this.state;

        return (
            <div>
                <p>
                    {
                        (Boolean(data[0])&&Boolean(data[1])&&Boolean(data[2])) &&
                        (data[0].length === 0 && data[1].length === 0 && data[2].length === 0) &&
                        <p>sorry! no results!</p>
                    }
                </p>
                {
                    Boolean(data[0]) &&
                    data[0].length > 0 &&
                    <>
                        <h4>in products:</h4>
                        <ul>
                            {
                                data[0].map(item => <li>
                                    <Link to={`${item.category_url}${item.subcategory_url}${item.product_url}`}>{item.product_name}</Link>
                                </li>)
                            }
                        </ul>
                    </>
                }
                {
                    Boolean(data[1]) &&
                    data[1].length > 0 &&
                    <>
                        <h4>in categories:</h4>
                        <ul>
                            {
                                data[1].map(item => <li>
                                    <Link to={`${item.category_url}`}>{item.category_name}</Link>
                                </li>)
                            }
                        </ul>
                    </>
                }
                {
                    Boolean(data[2]) &&
                    data[2].length > 0 &&
                    <>
                        <h4>in subcategories:</h4>
                        <ul>
                            {
                                data[2].map(item => <li>
                                    <Link to={`${item.category_url}${item.subcategory_url}`}>{item.subcategory_name} in {item.category_name}</Link>
                                </li>)
                            }
                        </ul>
                    </>
                }
            </div>
        );
    }
}

export default SearchView;