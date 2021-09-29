
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shirts.css'
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart'
import { Row, Spinner } from 'react-bootstrap';





const Shirts = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const [shirts, setShirts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setShirts(data)
                console.log(data)
            }
            )
    }, [])

    const handleCart = shirt => {
        const newCart = [...cart, shirt]
        setCart(newCart)

    }
    return (
        <div className="container-fluid">
            <div className="container-fluid mb-3">
                <div className="d-flex mx-auto w-50 container-fluid">
                    <input type="search" className="form-control ps-5 pe-5 border-2 input" placeholder="Search" aria-label="Search" />

                    <span className="cart-icon ms-1  mt-1">{cartIcon}</span><Cart
                        cart={cart}
                    ></Cart>
                </div>

            </div>

            <div className="container-fluid">
                {shirts.length === 0 ? < div className="spinner"> <Spinner animation="border" variant="primary" /><Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="warning" /></div>


                    : <Row xs={1} md={4} className="g-4">
                        {
                            shirts.map(shirt => <Shirt
                                key={shirt.id}
                                shirt={shirt}
                                handleCart={handleCart}

                            ></Shirt>)
                        }
                    </Row>
                }
            </div>



        </div>


    )
};

export default Shirts;