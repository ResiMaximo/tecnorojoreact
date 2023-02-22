import { Button } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <>
      <div className="cart">
        <Button size="md" variant="ghost" colorScheme="red">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{2}</span>
        </Button>
      </div>
    </>
  );
};
export default CartWidget;
