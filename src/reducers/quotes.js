import uuid from 'uuid'

export default (state = [], action) => {
  let quote 
  let index
  switch(action.type) {
    case 'ADD_QUOTE':
      // debugger
      return [...state, action.quote ]
  
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId )
  
    case 'UPVOTE_QUOTE':
      // debugger
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      return [...state.slice(0, index), Object.assign({},quote, {votes: quote.votes += 1}), ...state.slice(index+1) ] 

    case 'DOWNVOTE_QUOTE':
      // debugger
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      if (quote.votes > 0) {
        return [...state.slice(0,index), Object.assign({}, quote, {votes: quote.votes -= 1 }), ...state.slice(index+1) ]
      }
      return state;
      
    default:
      return state;
  }
}
