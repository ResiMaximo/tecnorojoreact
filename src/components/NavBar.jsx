import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="gray.100" color="black">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}>
          <Avatar
            size="xl"
            src="https://th.bing.com/th/id/OIP.c1AgBTdsQFDUXUjFEyO2cgHaHa?pid=ImgDet&rs=1"
          />
          </Link>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                size="md"
                variant="ghost"
                colorScheme="black"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Apple"}`}>
                  <MenuItem>Apple</MenuItem>
                </Link>
                <Link to={`/category/${"Samsung"}`}>
                  <MenuItem>Samsung</MenuItem>
                </Link>
                <Link to={`/category/${"Google"}`}>
                  <MenuItem>Google</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box>
            
          </Box>
          <Box p="50" w="100px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
