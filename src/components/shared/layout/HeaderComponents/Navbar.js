import React from 'react';
import {graphql, StaticQuery, Link} from "gatsby";

const Navbar = () => {

    const renderLinks = (links) => (
        <ul className={'nav-menu'}>
            {
                links.map(({node}) =>
                    <li className={'nav-li'} key={'cat' + node.category_id}>
                        <Link to={node.category_url} className={'nav-item'}>{node.category_name}</Link>
                        {
                            Boolean(node.subcategories) &&
                            renderSublinks(node)
                        }
                    </li>
                )
            }
        </ul>

    );

    const renderSublinks = (parent) => (
        <ul>
            {
                parent.subcategories.map(item =>
                    <li key={'subc' + item.subcategory_id}>
                        <Link to={parent.category_url + item.subcategory_url}>
                            {item.subcategory_name}
                        </Link>
                    </li>
                )
            }
        </ul>
    );

    return (
        <StaticQuery query={
            graphql`
              query NavbarQuery {
                 allCategories {
                    edges {
                      node {
                        category_name
                        category_url
                        category_id
                        subcategories {
                          subcategory_id
                          subcategory_name
                          subcategory_url
                        }
                      }
                    }
                  }
              }
              `
        }
                     render={data => (
                         <nav>
                             {
                                 renderLinks(data.allCategories.edges)
                             }
                         </nav>
                     )}/>

    );
};

export default Navbar;