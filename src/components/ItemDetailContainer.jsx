import { useState, useEffect } from 'react';
import { askForItemForId } from "../helpers/askForData";
import ItemDetail from "./ItemDetail"; // Corregido aquí
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();  
    
    useEffect(() => {
        askForItemForId(Number(id))
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error("Error fetching item:", error);
                setItem(null); 
            });
    }, [id]); 

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    );
};

export default ItemDetailContainer;
