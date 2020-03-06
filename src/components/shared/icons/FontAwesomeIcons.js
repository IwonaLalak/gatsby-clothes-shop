import * as React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faSearch, faShoppingBasket, faTrash, faUser} from '@fortawesome/free-solid-svg-icons'

export const IconBasket = () => <FontAwesomeIcon icon={faShoppingBasket}/>;
export const IconUser = () => <FontAwesomeIcon icon={faUser}/>;
export const IconSearch = () => <FontAwesomeIcon icon={faSearch}/>;
export const IconRemove = () => <FontAwesomeIcon icon={faTrash}/>;
export const IconAdd = () => <FontAwesomeIcon icon={faPlus}/>;