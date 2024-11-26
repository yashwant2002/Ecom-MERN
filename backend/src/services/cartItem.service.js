import { CartItem } from '../models/cartItem.model.js';
import { findUserByID } from './user.service.js'

async function updateCart(userId, cartItemId, cartItemData){
    try {
        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error(`cart item in not found : ${cartItemId}`);
        }

        const user = await findUserByID(item.userId);

        if(!user){
            throw new Error(`User not found : ${userId}`)
        }

        if(user._id.toString()==user.toString()){
            item.quantity= cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountPrice = item.quantity * item.product.discountPrice;
            const updateCartItem = await item.save()

            return updateCartItem;
        }else{
            throw new Error("you can't update your cart item")
        }
    } catch (error) {
        throw new Error(error.messages)
    }
}

async function removeCartItem(userId, cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await findUserByID(userId);

    if(user._id.toString() === cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("you cant remove another user's item")


}

async function findCartItemById(cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    if(cartItem){
        return cartItem
    }else{
        throw new Error("cart item not found")
    }
}


export {updateCart, removeCartItem, findCartItemById}