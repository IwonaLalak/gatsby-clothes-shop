import React, {Component} from 'react';
import {getCategories} from "../../../services/CategoryService";
import Select from "react-select";
import {productModel} from "../../../utilities/models/models";
import JsonElement from "../../shared/forTests/jsonElement";

class GenerateProductView extends Component {
    state = {

        id: 0,

        arr: [],

        categories: [],
        category: null,
        subcategory: null,

        currentProduct: productModel()

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
                       onChange={(e) => this.onChangeValue(key, e.target.value)}/>
            </div>
        )
    }

    render() {

        const keys = ["product_name", "product_code", "product_price", "product_url", "product_img", "product_desc", "product_collection"];

        return (
            <div>
                <button onClick={() => console.log(this.state)}>console state</button>
                <h5>just for tests..</h5>

                <div style={{width: "50%", float: 'left'}}>
                    <label>change start id</label>
                    <input type={'number'}
                           onChange={(e) => {
                               this.setState({id: e.target.value});
                               this.onChangeValue("product_id", e.target.value);
                           }}
                           defaultValue={this.state.id}/>

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
                    </form>
                </div>
                <div style={{width: "50%", float: 'left'}}>
                    <JsonElement value={this.state.currentProduct} label={'current product'} id={'currentProductJSON'}
                                 rows={20}/>
                </div>

            </div>
        );
    }
}

export default GenerateProductView;