import {findUserCart, addCartItem} from "../services/cart.service.js"

const findUserCart = async(req, res) =>{
    const user = req.user;
    try {
        const cart = await findUserCart(user._id);

        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


const addItemtoCart = async(req, res) =>{
    const user = req.user;
    try {
        const cart = await addCartItem(user._id);

        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

export { findUserCart, addItemtoCart}

