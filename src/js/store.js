import { createStore } from 'redux'

const reducer = ( state, action) => {
	if (action.type === "ADD_TOKEN") {
		return{
			...state,
			token: action.token
		}
	}
	if (action.type === "ADD_BIKE") {
		return{
			...state,
			cart: state.cart.concat(action.bike)
		}
	}
	if (action.type === "SECTION_VIEW") {
		return{
			...state,
			sectionView: action.sectionView
		}
	}
	if (action.type === "REMOVE_BIKE") {
		return{
			...state,
			cart: state.cart.filter(bike => bike.id !== action.bike.id)
		}
	}
	console.log('view '+state.sectionView)
	return state
};

export default createStore(reducer , { token : "" , sectionView : "" , cart:[]});