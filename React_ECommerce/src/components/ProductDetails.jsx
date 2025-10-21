import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/Product.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addProductToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleProductToBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addProductToBasket(payload));
    }

    const getProductById = () => {
        const foundProduct = products.find(product => product.id == id);
        if (foundProduct) {
            dispatch(setSelectedProduct(foundProduct));
        }
    }

    useEffect(() => {
        getProductById();
    }, [])

    return (
        <div>
            <h2 className='product-title'>Ürün Detayı</h2>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ marginRight: '40px' }}>
                    <img className='product-image' src={image} />
                </div>
                <div>
                    <h1 className='product-title'>{title}</h1>
                    <p className='product-desc'>{description}</p>
                    <h1 className='product-price'>{price} ₺</h1>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CiCirclePlus style={{ fontSize: '40px', marginRight: '5px' }} onClick={increment} /><span style={{ fontSize: '35px' }}> {count}  </span> <CiCircleMinus style={{ fontSize: '40px', marginLeft: '5px' }} onClick={decrement} />
                    </div>
                    <div>
                        <button className='basket-button' onClick={handleProductToBasket}>Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails