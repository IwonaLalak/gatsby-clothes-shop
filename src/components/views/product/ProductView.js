import React from 'react';

const ProductView = ({product}) => {
    return (
        <div id={'PRODUCTVIEW'}>
            <h1>{product.product_name}</h1>
            {
                product.product_img &&
                <img alt={'image of '+product.product_name} src={product.product_img} style={{maxWidth: '200px', maxHeight: '200px'}}/>
            }
            <p>{product.product_desc}</p>
            <table style={{border:"1px solid red"}}>
                {
                    product.product_details.map(item =>
                        <tr>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

export default ProductView;