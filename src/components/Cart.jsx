import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      <h3>.</h3>
      <Container className="cart-container">
        <FormControl>
          <Box>
            <FormLabel>Nombre y apellido</FormLabel>
            <Input type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </Box>
          <FormLabel>Direccion de envio y detalles</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button colorScheme="red" variant="solid">
              Enviar Informacion
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};
export default Cart;
