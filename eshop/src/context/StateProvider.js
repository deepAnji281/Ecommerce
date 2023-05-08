import React, { useReducer } from 'react'
import StateContext from './StateContext'

// wrapping up our app and provide the data layer
const StateProvider = ({initialState,reducer,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
)

  


export default StateProvider
