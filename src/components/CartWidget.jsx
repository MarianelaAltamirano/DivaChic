import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <React.Fragment>
                <Link className="menu-link" to="/carrito">
                    Carrito
                    <span className="numerito">{cantidadEnCarrito()}</span>
                </Link>
            </React.Fragment>
        </div>
    );
};

export default CartWidget;
