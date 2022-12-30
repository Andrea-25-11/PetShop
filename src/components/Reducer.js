const Reducer = (cart=[], action) => {
    if (action.type === 'ADD'){
        let tempcraft=cart.filter((services)=>services.id===action.payload.id)
        if(tempcraft < 1){
            return [...cart, action.payload]
        } else{
            return cart;
        }
    }
    if (action.type === 'REMOVE'){
        return cart.filter((services) => services.id !== action.payload.id);
    }
    if(action.type ==='INCREASE'){
        let tempcart = cart.map((services) => {
            if(services.id === action.payload.id){
                return {...services, quantity: services.quantity+1};
            }   return services
        })
        return tempcart;
    }
    if(action.type ==='DECREASE'){
        let tempcart = cart.map((services) => {
            if(services.id === action.payload.id){
                return {...services, quantity: services.quantity-1};
            }   return services
        })
        return tempcart;
    }
    return cart;
}
export default Reducer;
