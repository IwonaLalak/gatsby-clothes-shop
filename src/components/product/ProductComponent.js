import React from 'react';
import {Badge} from "react-bootstrap";

const ProductComponent = ({product}) => {

    console.log(product)

    const renderSizes = () => (
        <ul>
            {product.product_sizes && product.product_sizes.map(size => {
                if (size.available)
                    return (
                        <li>
                            <span>{size.size}</span>
                        </li>
                    )
            })}
        </ul>
    );

    const renderVariants = () => (
        <ul>
            {
                product.product_variants && product.product_variants.map(variant => (
                    <li>
                        <img src={variant.variant_icon} alt={'Variant ' + variant.variant_name}/>
                    </li>
                ))
            }
        </ul>
    );

    return (
        <div className={'ProductComponent'}>
            <div className={'img-container'}>
                <img src={product.product_img} alt={'Image of ' + product.product_name}/>
            </div>
            <div className={'top-informations'}>
                <h1>
                    {product.product_name}
                </h1>
                <Badge variant={'primary'}>
                    {product.product_price} zł
                </Badge>
            </div>
            <div className={'bottom-informations'}>
                <div className={'sizes'}>
                    {renderSizes()}
                </div>
                <div className={'variants'}>
                    {renderVariants()}
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;