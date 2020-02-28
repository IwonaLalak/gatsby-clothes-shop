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


    onChangeValue(value, key) {
        if (value !== null && value !== undefined) {
            let obj = Object.assign({}, this.state.currentProduct);
            obj[key] = value;
            this.setState({currentProduct: obj})
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => console.log(this.state)}>console state</button>
                <h5>just for tests..</h5>

                <div style={{width: "50%", float: 'left'}}>
                    <label>change start id</label>
                    <input type={'number'}
                           onChange={(e) => {
                               this.setState({id: e.target.value});
                               this.onChangeValue(e.target.value, "product_id");
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
                                    this.onChangeValue(e.category_id, "category_id");
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
                                        this.onChangeValue(e.subcategory_id,"subcategory_id");
                                    }}
                                />
                            </div>
                        }
                        <div>
                            <label>product name</label>
                            <input type={'text'} onChange={(e) => this.onChangeValue(e.target.value, 'product_name')}/>
                        </div>
                    </form>
                </div>
                <div style={{width: "50%", float: 'left'}}>
                    <JsonElement value={this.state.currentProduct} label={'current product'} id={'currentProductJSON'}
                                 rows={30}/>
                </div>

            </div>
        );
    }
}

export default GenerateProductView;