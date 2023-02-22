import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();

  const catFilter = Data.filter((phone) => phone.category === category);
  
  return (
    <div>
      <Center bg="red.100" h="80px" color="black">
        <Heading as="h2" size="2xl">
          Productos
        </Heading>
      </Center>
      {category ? <ItemList phones={catFilter} /> : <ItemList phones={Data} />}
    </div>
  );
};

export default ItemListContainer;
