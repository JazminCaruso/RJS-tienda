import "./ItemDetail.scss";
import Detail from "../Detail/Detail";
import Topics from "../Topics/Topics";
import Description from "../Description/Description";

const ItemDetail = ({ item }) => {

  return (
    <div className="item-detail">
      <div className="titulo">
        <h2 className="titulo-curso">{item.nombre}</h2>
      </div>
      <div className="imagenes">
        <img src={item.img1} alt={item.nombre} />
        <img src={item.img} alt={item.nombre} />
        <img src={item.img2} alt={item.nombre} />
      </div>
      <div className="detalles">
        <Description item={item} />
        <Topics item={item} />
      </div>
      <Detail item={item} />
    </div>
  );
};

export default ItemDetail;