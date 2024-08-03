import {Cart} from "../models/cart.model.js"

async function createCart(user){
    try {
        const cart = new Cart({user});
        const createCart = await cart.save();

        return createCart;
    } catch (error) {
        throw new Error(error.message);
    }
}



export {createCart}