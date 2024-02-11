import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
   
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <p>Stock: {producto.stock}</p>
        {/* <p>{producto.descripcion}</p> */}
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  );
}

Item.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
