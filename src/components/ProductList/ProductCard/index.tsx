import { StyledProductCard } from "./style";
import backGroundCart from "../../../assets/images/image3.svg"
import heart from "../../../assets/icons/coração.svg"
import { useContext } from "react";
import { CartContext, IOffer } from "../../../providers/CartProvider";

interface IOffersCartProps {
  offer: IOffer;
}


export const ProductCard = ({ offer }: IOffersCartProps) => {
  const { addItemToCart } = useContext(CartContext);
  const newPrice = offer.originalPrice - (offer.discount / 100) * offer.originalPrice;

  return (
    <StyledProductCard>
      <div>
        <img src={backGroundCart} alt="Mesa servida" />
        <h4>{offer.company}</h4>
        <figure>
          <img src={heart} alt="Coração vermelho" />
        </figure>
        <div>
          <h3>{offer.quantity} sacolas</h3>
        </div>
      </div>
      <div>
        <div>
          <h3>Oferta: {offer.title}</h3>
          <p>Retirar hoje até às 22:00h</p>
        </div>
        <div>
          <h4>★ 4.2</h4>
          <h3>{newPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</h3>
          <button onClick={() => addItemToCart(offer)}>Colocar no carrinho</button>
        </div>
      </div>
    </StyledProductCard>
  );
};