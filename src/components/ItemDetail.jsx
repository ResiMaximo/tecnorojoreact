import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
  Alert,
} from "@chakra-ui/react";
import phoneImage from "../assets/iphone12r.png";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemDetail = ({ phones }) => {
  const { id } = useParams();

  const phoneFilter = phones.filter((phone) => phone.id == id);

  return (
    <>
      {phoneFilter.map((phone) => (
        <div key={phone.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={phoneImage} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{phone.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {phone.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {phone.category}
                  </Text>
                  <Text color="red.600" fontSize="l">
                    Cantidad: {phone.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: U$D {phone.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount stock={phone.stock} />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};
export default ItemDetail;
