import {updateCart, removeCartItem} from "../services/cartItem.service.js"

const updateCartItem = async (req, res) => {
    const user = req.user
    try {
        const updateCartItem = updateCart(user._id, req.params.id, req.body);
        return res.status(200).send(updateCartItem)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

const removeCartItems = async (req, res) => {
    const user = req.user
    try {
        await  removeCartItem(user._id, req.params.id);
        return res.status(200).send("Cart item removed successfully")
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


export { updateCartItem, removeCartItems}