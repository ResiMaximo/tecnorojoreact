import { useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count == 1 ? (
          <Tooltip label="Cantidad minima alcanzada" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center>
          <Button
            onClick={() => console.log(count)}
            variant="solid"
            colorScheme="red"
          >
            Agregar al carrito: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="Cantidad maxima alcanzada" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;