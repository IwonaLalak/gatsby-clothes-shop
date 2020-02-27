import React from 'react';
import {connect} from "react-redux";
import {resetBasket} from "../../../redux_storage/basket/operations";


class BasketView extends React.Component {

    render() {

        console.log(this.props);

        let {basket} = this.props;

        return (
            <div id={'BASKETVIEW'}>
                <h1>basket</h1>
                <ul>
                    {basket.map(item =>
                        <li>
                            {JSON.stringify(item)}
                        </li>
                    )}
                </ul>
                <button onClick={()=>this.props.resetBasket()}>reset basket</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    basket: state.basket.arr
});

const mapDispatchToProps = dispatch => ({
    resetBasket: () => dispatch(resetBasket())
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketView);