export const toggleCartDropdown = (dispatchCart) => {
    dispatchCart({
        type: "TOGGLE_CART_DROPDOWN"
    })
}

export const addItemToCart = (dispatchCart, product) => {
    dispatchCart({
        type: "ADD_ITEM_TO_CART",
        product: product
    })
}