import {Provider} from 'react-redux'
import store from './Store/store.ts'
import ProductList from "./component/ProductList.tsx";
import {productData} from "./data/items.ts";
import Product from "./component/Product.tsx";
import NavBar from "./component/NavBar.tsx";

function App() {
    return (
        <Provider store={store}>
            <NavBar/>
            <ProductList>
                {productData.map((product) => (
                    <div key={product.id}>
                        <Product {...product} />
                    </div>
                ))}
            </ProductList>
        </Provider>)
}

export default App;