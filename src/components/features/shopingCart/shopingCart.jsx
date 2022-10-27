import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../../contexts/shoppingCartContext";
import formatCurrency from "../../../utilities/formatCurrency";
import { CartItem } from "../CartItem/CartItem";
import store from '../../../services/store.json'

export function ShopingCart({ isOpen }) {
  const { closeCart, cartItem } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack direction>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            TOTAL {" "} 
            {formatCurrency
            (cartItem.reduce((total,cartItem)=>{
              const item = store.find((i)=>i.id===cartItem.id)
              return total + (item?.price || 0)* cartItem.quantity

            },0)
            )}
            </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
