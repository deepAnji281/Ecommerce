// here we define all the level states and define make changes to the states
export const initialState={
    basket:[]
}
const Reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
    }

}
export default Reducer;
