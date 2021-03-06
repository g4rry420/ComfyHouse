export const updateCart = (dispatchCart, items) => {
    dispatchCart({
        type: "UPDATE_CART",
        items
    })
}


export const toggleCartDropdown = (dispatchCart) => {
    dispatchCart({
        type: "TOGGLE_CART_DROPDOWN"
    })
}

export const addItemToCart = (dispatchCart, product) => {
    dispatchCart({
        type: "ADD_ITEM_TO_CART",
        product
    })
}

export const removeItem = (dispatchCart, id) => {
    dispatchCart({
        type: "REMOVE_ITEM",
        id
    })
}

export const qtyIncrease = (dispatchCart, id) => {
    dispatchCart({
        type: "QTY_INCREASE",
        id
    })
}

export const qtyDecrease = (dispatchCart, product) => {
    dispatchCart({
        type: "QTY_DECREASE",
        product
    })
}

export const emptyCart = (dispatchCart) => {
    dispatchCart({
        type: "EMPTY_CART"
    })
}