import cartService, { findUserCart } from './cart.service.js'
import Address from '../models/address.model.js'


async function createOrder(user, shipAddress){
    let address ;

    if(shipAddress._id){
        let isExist = await Address.findById(shipAddress._id)
        address = isExist
    }else{
        address= new Address(shipAddress);
        address.user = user;
        await address.save();

        user.Address.push(address);
        await user.save();
    }

    const cart = await findUserCart(user._id);
    const orderItems= [];

    for(const item of cart.cartItems){
        const orderItem = new orderItems({
            price : item.price
        })
    }
}