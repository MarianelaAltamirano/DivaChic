import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <p className="stock">Stock: {item.stock}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        categoria: PropTypes.string.isRequired, 
        stock: PropTypes.number.isRequired, 
    }).isRequired,
};

export default ItemDetail;
