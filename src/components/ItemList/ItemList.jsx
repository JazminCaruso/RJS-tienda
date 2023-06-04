import './ItemList.scss';
import Item from '../Item/Item';
import Row from 'react-bootstrap/Row';
import Search from '../Search/Search';


const ItemList = ({ items }) => {

  return (
    <div>
      <h2 className='cursos'>Elegí el curso que desees:</h2>
      <Search></Search>
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






