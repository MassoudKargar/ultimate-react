import {useCardDispatch, useCartSelector} from "../Store/hooks.ts";
import {addToCart, type CartItem, type CartState, removeFromCart} from '../Store/cart-slice.ts'

function CartItems() {

    const dispatch = useCardDispatch();

    const cartItems: CartItem[] = useCartSelector((state: { cart: CartState }): CartItem[] => state.cart.items)
    const totalPrice: number = cartItems.reduce((value: number, item: CartItem) => value + item.price * item.quantity, 0);

    function handleAddToCart(item: CartItem) {
        dispatch(addToCart(item));
    }

    function handleRemoveFromCart(id: string) {
        dispatch(removeFromCart(id));
    }

    return (
        <div>
            {cartItems.length == 0 && <p>محصولی در سبد خرید وجود ندارد</p>}

            <ul className="cart-items">
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <span>
                                    {item.title}
                                </span>
                            </div>
                            <div className="cart-item-actions">
                                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleAddToCart(item)}>+</button>
                            </div>
                        </li>
                    )
                })}

            </ul>
            {cartItems.length > 0 && <p className='cart-total-price'>{totalPrice} تومان</p>}
        </div>
    );
}

export default CartItems;