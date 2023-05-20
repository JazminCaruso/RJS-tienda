/*import './ItemList.scss'
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

export default ItemList*/

import './ItemList.scss';
import Item from '../Item/Item';
import Row from 'react-bootstrap/Row';
import Search from '../Search/Search';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Cursos</h2>
      <div className='buscador'>
        <Search></Search>
      </div>
      <div className="container">
        <Row className="row">
          {items.map((prod) => (
            <div className="col-lg-3 col-md-6 cards" key={prod.id}>
              <Item item={prod} />
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ItemList;






