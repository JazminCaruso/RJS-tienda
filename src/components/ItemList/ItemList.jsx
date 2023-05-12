import './ItemList.scss'
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({items}) => {
    return (
        <div className="list">
            <h2>Cursos</h2>
            <hr/>
            <div className="row">
                {
                    items.map((prod) => <ItemCard item={prod} key={prod.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList

/*

import KitchenSinkExample from '../Card/card';

const ItemList = ({items}) => {
    return (
        <div className="list">
            <h2>Cursos</h2>
            <hr/>
            <div className="row">
                {
                    items.map((prod) => <KitchenSinkExample item={prod} key={prod.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList

*/ 