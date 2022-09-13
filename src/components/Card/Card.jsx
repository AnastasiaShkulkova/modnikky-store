import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/context";
import { StyledCard } from "./styles";

export function Card({
  images,
  price,
  id,
}) {


  const { setItemId, onClickItem } = useContext(AppContext);

const getCardInfo = () => {
setItemId(id)
onClickItem(id)
}


  return (
    <StyledCard>
      <div className="card">
        <div className="card-image-container">
          <div className="card-hover">
            <Link to={`/item/${id}`}>
              <div className="card-hover-btn" onClick={() => getCardInfo()} >
                VIEW MORE
              </div>
            </Link>
          </div>
          <img src="img/like.svg" className="card-like" alt="" width={40} />
          <img className="card-image" src={images[0]} alt="item" />
        </div>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <p className="card-price">
              {price.value} {price.currency}
            </p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
