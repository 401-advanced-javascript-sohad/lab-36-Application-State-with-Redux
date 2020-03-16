import { createStore, combineReducers } from 'redux';

import { composeWithDevTools} from 'redux-devtools-extension';

import action from'./action.js';



let reducers=combineReducers({action});
const store = () =>{
  return createStore (reducers,composeWithDevTools());

};
export default store();
