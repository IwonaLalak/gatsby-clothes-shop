import React, {Component} from 'react';
import {getCategories} from "../../../services/CategoryService";
import Select from "react-select";
import {productModel} from "../../../utilities/models/models";
import JsonElement from "../../shared/forTests/jsonElement";
import {IconAdd, IconRemove, IconSearch} from "../../shared/icons/FontAwesomeIcons";
import {generateNextID} from "../../../utilities/helpers/generateNextId";

class GenerateProductView extends Component {
    state = {

        id: 0,

        categories: [],
        category: null,
        subcategory: null,

        currentProduct: productModel(),

        productArray: []

    };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        getCategories().then(({data}) => this.setState({categories: data})).catch(e => console.log(e))
    };


    onChangeValue(key, value) {
        if (value !== null && value !== undefined) {
            let obj = Object.assign({}, this.state.currentProduct);
            obj[key] = value;
            this.setState({currentProduct: obj})
        }
    }

    renderInput = (key) => {

        return (
            <div>
                <label htmlFor={'input' + key}>{key}</label>
                <input id={'input' + key} type={key === "product_price" ? "number" : "text"}
                       onChange={(e) => this.onChangeValue(key, e.target.value)}
                       value={this.state.currentProduct[key]}/>
            </div>
        )
    }

    onChangeProductSize = ({target: {checked}}, {size}) => {
        let obj = Object.assign({}, this.state.currentProduct);
        let sizeObj = obj.product_sizes.find(item => item.size === size)

        if (Boolean(sizeObj))
            sizeObj.available = checked;

        this.setState({currentProduct: obj})
    };

    addToDynamicArray = (type) => {
        let obj = Object.assign({}, this.state.currentProduct);

        let row;
        if (type === "product_variants") {
            row = {
                "variant_id": generateNextID(Array.from(obj[type]), 'variant_id'),
                "variant_name": "",
                "variant_icon": ""
            }
        } else {
            row = {
                "id": generateNextID(Array.from(obj[type]), 'id'),
                "key": "",
                "value": ""
            }
        }

        obj[type].push(row)
        this.setState({currentProduct: obj})
    };
    removeFromDynamicArray = (objToDelete) => {
        let obj = Object.assign({}, this.state.currentProduct);
        if (Object.keys(objToDelete).indexOf("variant_id") > -1) {
            // delete form variants
            obj.product_variants.splice(obj.product_variants.indexOf(objToDelete), 1)
        } else {
            obj.product_details.splice(obj.product_details.indexOf(objToDelete), 1)
        }

        this.setState({currentProduct: obj})
    };

    onChangeDynamicArrayValue = (id, key, value) => {
        let obj = Object.assign({}, this.state.currentProduct);
        let objToChange;
        if (key.indexOf('variant') > -1) {
            objToChange = obj.product_variants.find(o => o.variant_id === id);
            if (objToChange)
                objToChange[key] = value;
        } else {
            objToChange = obj.product_details.find(o => o.id === id);
            if (objToChange)
                objToChange[key] = value;
        }
        this.setState({currentProduct: obj})
    };

    addToProductArray = () => {
        this.setState({
            productArray: [...this.state.productArray, this.state.currentProduct],
            currentProduct: productModel(),
            id: parseInt(this.state.id) + 1,
            category: null,
            subcategory: null,
        })
    };

    render() {

        const keys = ["product_name", "product_code", "product_price", "product_url", "product_img", "product_desc", "product_collection"];

        return (
            <div id={'GENERATE_PRODUCT_VIEW'}>
                <button onClick={() => console.log(this.state)}>console state</button>
                <h5>just for tests..</h5>

                <div style={{width: "50%", float: 'left'}}>
                    <label>change start id</label>
                    <input type={'number'}
                           onChange={(e) => {
                               this.setState({id: e.target.value});
                               this.onChangeValue("product_id", e.target.value);
                           }}
                           defaultValue={this.state.id}
                           value={this.state.id}
                    />

                    <form>
                        <div>
                            <label>category</label>
                            <Select
                                getOptionLabel={({category_name}) => category_name}
                                getOptionValue={({category_id}) => category_id}
                                options={this.state.categories}
                                value={this.state.category}
                                onChange={(e) => {
                                    this.setState({category: e, subcategory: null});
                                    this.onChangeValue("category_id", e.category_id);
                                }}
                            />
                        </div>
                        {
                            Boolean(this.state.category) &&
                            <div>
                                <label>subcategory</label>
                                <Select
                                    getOptionLabel={({subcategory_name}) => subcategory_name}
                                    getOptionValue={({subcategory_id}) => subcategory_id}
                                    options={this.state.category.subcategories}
                                    value={this.state.subcategory}
                                    onChange={(e) => {
                                        this.setState({subcategory: e});
                                        this.onChangeValue("subcategory_id", e.subcategory_id);
                                    }}
                                />
                            </div>
                        }
                        {
                            keys.map(item => this.renderInput(item))
                        }
                        <div>
                            <label>sizes:</label>
                            <div>
                                {
                                    Boolean(this.state.currentProduct) &&
                                    this.state.currentProduct.product_sizes.map(size =>
                                        <span style={{marginRight: '15px'}}>
                                           <input type={'checkbox'} checked={size.available}
                                                  onChange={(e) => this.onChangeProductSize(e, size)}/>
                                           <span>{size.size} [{size.size_number}]</span>
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <label>product variants</label>
                            <button type={'button'} onClick={() => this.addToDynamicArray('product_variants')}>
                                <IconAdd/> add new
                            </button>
                            {
                                Boolean(this.state.currentProduct) &&
                                this.state.currentProduct.product_variants.map(variant =>
                                    <div key={variant.variant_id}>
                                        <label>variant name</label><input type={'text'}
                                                                          onChange={(e) => this.onChangeDynamicArrayValue(variant.variant_id, 'variant_name', e.target.value)}
                                                                          value={variant.variant_name}
                                    />
                                        <label>variant icon</label><input type={'text'}
                                                                          onChange={(e) => this.onChangeDynamicArrayValue(variant.variant_id, 'variant_icon', e.target.value)}
                                                                          value={variant.variant_icon}
                                    />
                                        <button type={'button'} onClick={() => this.removeFromDynamicArray(variant)}>
                                            <IconRemove/></button>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <label>product details</label>
                            <button type={'button'} onClick={() => this.addToDynamicArray('product_details')}>
                                <IconAdd/> add new
                            </button>
                            {
                                Boolean(this.state.currentProduct) &&
                                this.state.currentProduct.product_details.map(detail =>
                                    <div key={detail.id}>
                                        <label>detail key</label><input type={'text'}
                                                                        onChange={(e) => this.onChangeDynamicArrayValue(detail.id, 'key', e.target.value)}
                                                                        value={detail.key}/>
                                        <label>detail value</label><input type={'text'}
                                                                          onChange={(e) => this.onChangeDynamicArrayValue(detail.id, 'value', e.target.value)}
                                                                          value={detail.value}
                                    />
                                        <button type={'button'} onClick={() => this.removeFromDynamicArray(detail)}>
                                            <IconRemove/></button>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                </div>
                <div style={{width: "50%", float: 'left'}}>
                    <JsonElement value={this.state.currentProduct} label={'current product'} id={'currentProductJSON'}
                                 rows={20}/>
                    <button type={'button'} onClick={this.addToProductArray}>add to products array</button>
                </div>
                <div>
                    <JsonElement value={this.state.productArray} label={'products array'} id={'currentProductArrayJSON'}
                                 rows={20}/>
                </div>

            </div>
        );
    }
}

export default GenerateProductView;