import * as marketActions from './marketActions'

const initialState={
  coins:[],
  error:null,
  loading:false
}

export const marketReducer = ( state = initialState, action ) =>{

  switch(action.type){

    case marketActions.GET_COIN_MARKET_BEGIN:
      return {
        ...state,
        loading: true
      };
    case marketActions.GET_COIN_MARKET_SUCCESS:
      return {
        ...state,
        coins: action.payload.coins
      };
    case marketActions.GET_COIN_MARKET_FAILURE:
      return{
        ...state,
        error:action.payload.error
      };

      default:
      return state

  }


}