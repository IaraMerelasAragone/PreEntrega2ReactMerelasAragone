import React from 'react';
import Item from './Item';
import { aMayuscula } from "../helpers/aMayuscula";

const ItemList = ({productos, titulo}) => {
    return (
        <div className="container">
            <h2 className="main-title">{aMayuscula(titulo)}</h2>

            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList;