import React from 'react';
import {connect} from "react-redux";
import {addToBasket} from "../../../redux_storage/basket/operations";
import _ from 'lodash'

const ProductView = ({product, addToBasket}) => {

    return (
        <div id={'PRODUCTVIEW'}>
            <h1>{product.product_name}</h1>
            {
                product.product_img &&
                <img alt={'image of ' + product.product_name} src={product.product_img}
                     style={{maxWidth: '200px', maxHeight: '200px'}}/>
            }
            <p>{product.product_desc}</p>
            <table style={{border: "1px solid red"}}>
                {
                    product.product_details.map(item =>
                        <tr>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                        </tr>
                    )
                }
            </table>
            <button onClick={() => addToBasket(_.omit(product,["product_variants","product_desc","product_details","product_sizes"]))}>add to basket</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addToBasket: item => dispatch(addToBasket(item))
})

export default connect(null, mapDispatchToProps)(ProductView);