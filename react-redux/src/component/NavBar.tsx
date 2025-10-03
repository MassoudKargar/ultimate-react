import {useState} from "react";
import Cart from "./Cart.tsx";
import {useCartSelector} from "../Store/hooks.ts";


function NavBar() {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const cartQuantity: number = useCartSelector((state): number =>
        state.cart.items.reduce((value, item) =>
            value + item.quantity, 0));

    function handleOpenCart() {
        setCartIsOpen(true);
    }

    function handleCloseCart() {
        setCartIsOpen(false);
    }

    return <>
        {cartIsOpen && <Cart onClose={handleCloseCart}/>}
        <div className='navbar'>
            <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
        </div>
    </>
}

export default NavBar;