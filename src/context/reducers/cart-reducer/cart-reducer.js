export const cartReducer = (state, action) => {

    console.log(state)
    switch(action.type) {
        case "ADD_ITEM_TO_CART":
            if(!state.map(item => item.id).includes(action.product.id)){
                return [...state,{
                    img: action.product.item[0].smallImage[0].smallImage,
                    title: action.product.title,
                    price: action.product.price,
                    id: action.product.id,
                    qty: 1,
                    item: action.product.item[0]
                }]
            }else{
                return state.filter(item => {
                        if(item.id === action.product.id){
                            return item.qty++;
                        }
                        return item;
                    })
            }     

        default:
            return state
    }
}