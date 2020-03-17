import React from 'react';
import CategoryHeaderSection from "./components/sections/CategoryHeaderComponent";
import CategorySubcategories from "./components/sections/CategorySubcategories";
import CategoryProducts from "./components/sections/CategoryProducts";

const CategoryView = ({category,products,bannerImage}) => {

    return (
        <div id={'CATEGORYVIEW'}>
            <CategoryHeaderSection category={category} bannerImage={bannerImage} />
            <CategorySubcategories category={category} subcategories={category.subcategories} products={products.edges} />
            <CategoryProducts products={products.edges.filter(item=>item.node.product_collection==='BESTSELLERS').slice(0,4)}/>
        </div>
    );
};

export default CategoryView;