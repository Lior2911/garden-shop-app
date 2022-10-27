import "./Shop.css";
import React from "react";
import storeItems from "../../../services/store.json"
import {Row,Col}from"react-bootstrap"
import StoreItem from "../../features/StoreItem/StoreItem";

function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item=>(
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
    
  );
};

export default Shop;
