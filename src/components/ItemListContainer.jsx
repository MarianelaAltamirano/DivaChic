import { useEffect, useState } from 'react';
import { askForData } from '../helpers/askForData';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const { categoria } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await askForData();
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("productos");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                
            }
        };

        fetchData();

    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
}

export default ItemListContainer;
