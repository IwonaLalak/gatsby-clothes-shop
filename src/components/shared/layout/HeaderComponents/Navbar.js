import React from 'react';
import {Link} from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <ul className={'nav-menu'}>
                <li className={'nav-li'}>
                    <Link to={''} className={'nav-item'}>women</Link>
                    <ul>
                        <li>
                            <Link to={'/drop'}>
                                tops
                            </Link>
                        </li>
                        <li>
                            <Link to={'/drop'}>
                                trousers
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={'nav-li'}><Link to={''} className={'nav-item'}>men</Link></li>
                <li className={'nav-li'}><Link to={''} className={'nav-item'}>kids</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;