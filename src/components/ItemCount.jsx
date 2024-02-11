import PropTypes from 'prop-types';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    );
};

ItemCount.propTypes = {
    cantidad: PropTypes.number.isRequired,
    handleRestar: PropTypes.func.isRequired,
    handleSumar: PropTypes.func.isRequired,
    handleAgregar: PropTypes.func.isRequired,
};

export default ItemCount;
