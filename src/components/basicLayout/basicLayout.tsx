import React from "react";
import {IBasicLayout} from "./types";
import {Box} from "@chakra-ui/react";

const BasicLayout: React.FC<IBasicLayout> = ({children}) => {
    return (
        <Box height='100vh' width='100%' bg='gray.500'>
            {children}
        </Box>
    )
}

export default BasicLayout;