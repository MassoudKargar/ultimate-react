import {addToCart} from "../Store/cart-slice.ts";
import {useCardDispatch} from "../Store/hooks.ts";

type ProductProps = {
    id: string,
    title: string,
    price: number,
    image: string,
}

function Product({id, title, price, image}: ProductProps) {
    const dispatch = useCardDispatch()

    function handleAddToCart() {
        dispatch(addToCart({id, title, price}))
    }

    return <div className="product">
        <img src={image} alt={title}/>
        <div>
            <h3>{title}</h3>
            <p className="product-proce">{price} تومان</p>
        </div>
        <p className='product-actions'>
            <button onClick={handleAddToCart}>افزودن به سبد خرید</button>
        </p>
    </div>
}

export default Product;