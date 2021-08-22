import React from 'react';
import {Box, Flex, Spacer} from "@chakra-ui/react";
import Wrapper from "./Wrapper";
import {Link} from "react-router-dom";

const Header = () => {

    
    return (
        <Box
            bgColor="#032541"
            p={15}
            color="white"
        >
            <Wrapper>
                <Flex height="50px" alignItems="center" fontSize="xl">
                    <Box mr={45}>
                        <Link to="/movies">
                            Фильмы
                        </Link>
                    </Box>
                    <Box mr={45}>
                        <Link to="/favorites">
                            Избранные
                        </Link>
                    </Box>
                    <Spacer />
                </Flex>
            </Wrapper>
        </Box>
    );
};

export default Header;