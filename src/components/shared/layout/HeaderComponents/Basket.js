import React from 'react';
import {IconBasket} from "../../icons/FontAwesomeIcons";
import {Badge} from "react-bootstrap";
import {Link} from 'gatsby';
import {connect} from "react-redux";

const Basket = ({basket}) => {
    return (
        <Link to={'/basket'} id={'basket-header'}>
            <IconBasket/> <span>Basket</span> <Badge variant={'primary'}>{basket.length}</Badge>
        </Link>
    );
};

const mapStateToProps = state => ({
    basket: state.basket.arr
});

export default connect(mapStateToProps, null)(Basket);