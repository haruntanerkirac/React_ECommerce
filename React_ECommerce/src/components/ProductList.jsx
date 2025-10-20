import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllProducts } from '../redux/slices/productSlice'
import Product from './Product';

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div>
            <div><h2 style={{ textAlign: 'center', color: 'darkblue', }}>ÜRÜNLER</h2></div>
            <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '20px' }}>
                {
                    products && products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList