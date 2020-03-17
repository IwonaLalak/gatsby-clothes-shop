import React from 'react';
import {Badge} from "react-bootstrap";
import {Link} from 'gatsby'
import { formatMoney } from "../../utilities/formatters/money"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProductComponent = ({product}) => {

    const renderSizes = () => (
        <ul>
            {product.product_sizes && product.product_sizes.map(size => {
                if (size.available)
                    return (
                        <li title={`Size: ${size.size} [${size.size_number}]`}>
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
                    <li title={`Variant: ${variant.variant_name}`}>
                        <img src={variant.variant_icon} alt={'Variant ' + variant.variant_name}/>
                    </li>
                ))
            }
        </ul>
    );

    return (
        <Link to={`${product.category_url}${product.subcategory_url}${product.product_url}`}>
            <div className={'ProductComponent'}>
                <div className={'img-container'}>
                    <LazyLoadImage src={product.product_img} alt={`Image of ${product.product_name}`} effect={'blur'}/>
                </div>
                <div className={'top-informations'}>
                    <h1>
                        {product.product_name}
                    </h1>
                    <Badge variant={'primary'}>
                        {formatMoney(product.product_price)}
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
        </Link>

    );
};

export default ProductComponent;