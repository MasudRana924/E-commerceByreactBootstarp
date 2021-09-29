
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shirts.css'
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart'




const Shirts = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const [shirts, setShirts] = useState([])
    const[cart,setCart]=useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {setShirts(data)
                console.log(data)
            }
            )
    }, [])

  const handleCart=shirt=>{
     const newCart=[...cart,shirt]
     setCart(newCart)

  }
    return (
        <div className="container-fluid">
           <div className="container-fluid">

          
            <Navbar bg="lg" expand="lg">

                <Container fluid >
                    <Navbar.Brand href="#">  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="bg-warning" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="fs-4">Home</Nav.Link>
                            <Nav.Link href="#action2" className="fs-4">About Us</Nav.Link>
                            <Nav.Link href="#action2" className="t fs-4">Contact Us</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="ps-5 pe-5 h-75 border-2 border-warning outline-warning input"
                                aria-label="Search"
                            />
                            <span className="cart-icon   mt-1">{cartIcon}</span><Cart
                             cart={cart}
                            ></Cart>


                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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