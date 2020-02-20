import React from 'react';
import {IconBasket} from "../../icons/FontAwesomeIcons";
import {Badge} from "react-bootstrap";
import {Link} from 'gatsby';

const Basket = () => {
    return (
        <Link to={''} id={'basket-header'}>
            <IconBasket/> <span>Basket</span> <Badge variant={'primary'}>0</Badge>
        </Link>
    );
};

export default Basket;