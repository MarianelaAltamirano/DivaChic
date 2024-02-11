import PropTypes from 'prop-types';
import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className='Container'>
        <h2 className='main-title'>{titulo}</h2>
      <div className="productos">
        {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  productos: PropTypes.array.isRequired,
  titulo: PropTypes.string.isRequired 
     
};

export default ItemList;