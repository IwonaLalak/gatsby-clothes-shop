import React from 'react';
import {Link} from 'gatsby'

const CategorySubcategories = ({category, subcategories, products}) => {

    const checkIfThereAreSomeProducts = (subcategory_id) => {

        let productsInSubcategory = products.filter(item => subcategory_id === item.node.subcategory_id);
        if (productsInSubcategory.length > 0)
            return productsInSubcategory.length
        else
            return 0
    };

    return (
        <section id={'SUBCATEGORIES'}>
            <ul>
                {subcategories.map(item => <li>
                    <Link to={`${category.category_url}${item.subcategory_url}`}>
                        <div className={'name'}>{item.subcategory_name}</div>
                        <div className={'how-many-products'}>{checkIfThereAreSomeProducts(item.subcategory_id)} products</div>
                    </Link>
                </li>)}
            </ul>

        </section>
    );
};

export default CategorySubcategories;