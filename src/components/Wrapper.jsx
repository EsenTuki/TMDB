import React from 'react';
import {Box} from "@chakra-ui/react";

const Wrapper = (props) => {
    return (
        <Box marginX="auto" width="925px">
            {props.children}
        </Box>
    );
};

export default Wrapper;