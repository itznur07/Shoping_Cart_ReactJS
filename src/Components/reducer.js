export const reducer = (state, action) => {
  // Remove Item Individual
  if(action.type === "REMOVE_ITEM"){
    return{
      ...state,
      items:state.items.filter((ele) => {
        return ele.id !== action.payload
      })
    }
  }
  // Claer all Cart Items
  if(action.type === "CLEAR_CARD"){
    return{
      ...state,
      items:[]
    }
  }
  // Increment Qantity 
  if(action.type === "INCREMENT"){
    let updateVal = state.items.map((currEle) => {
      if(currEle.id === action.payload){
        return {
          ...currEle,
          quantity: currEle.quantity + 1
        }
      }
      return currEle
    })
    return{
      ...state,
      items: updateVal
    }
  }
  // Decrement Qantitiy Value
  if(action.type === "DECREMENT") {
    let updateVal = state.items.map((curr) => {
      if(curr.id === action.payload){
        return {
          ...curr,
          quantity: curr.quantity - 1
        }
      } 
      return curr
    }).filter((e) => {
      return e.quantity !== 0
    })
    return{
      ...state,
      items:updateVal
    }
  }
  // update total items
  if(action.type === "GET_ITEM"){
        let {totalItem, totalAmount} = state.items.reduce((a, e) => {
          let {quantity, price} = e;
          let updateVal = price * quantity;
          a.totalAmount += updateVal;
          a.totalItem += quantity;
          return a;
        },
        {totalItem:0, totalAmount:0}
        )
        return{
          ...state, totalItem, totalAmount
        }
      }
  return state
}