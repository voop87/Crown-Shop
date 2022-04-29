import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userReducer/userReducer";
import cartReducer from "./cartReducer/cartReducer";
import directoryReducer from "./directoryReducer/directoryReducer";
import shopReducer from "./shopReducer/shopReducer";

const persistConfig = {
	key: 'root',
	storage,
	//Добавляем только cart, т.к. user уже сохраняется через firebase
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);