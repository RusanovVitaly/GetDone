import React from "react";
import BasicLayout from "../../components/basicLayout";
import {Box, Center, Heading, VStack} from "@chakra-ui/react";
import LoginForm from "../../components/loginForm";
import {IUserCredentials} from "../../components/loginForm/types";
import client from "../../services/pocketbase";
import {redirect} from "react-router-dom";
import status from "http-status";


const getMessageByStatus = (e: any) => {
    switch (e.status) {
        case status.BAD_REQUEST: {
            return {
                success: false,
                message: "Неверный логин или пароль",
            };
        }
        default: {
            return {
                success: false,
                message: "Ошибка сервера, попробуйте снова",
            };
        }
    }

}

const LoginPage: React.FC = () => {


    const onLogin = async (values: IUserCredentials) => {
        try {
            await client.collection("users").authWithPassword(values.login, values.password);
            redirect("/");
            return {success: true}
        } catch (e) {
            return getMessageByStatus(e);
        }
    };


    return (
        <BasicLayout>
            <Center w="100%" h="100%">
                <Box w="400px" h="350px" bg="gray.700" borderRadius="18px">
                    <VStack h="100%" justifyContent="space-between" alignItems="center">
                        <Heading mt={5} size="lg">
                            Добро пожаловать!
                        </Heading>
                        <Center w="100%">
                            <Box w="80%" mb={20}>
                                <LoginForm onFormSubmit={onLogin}/>
                            </Box>
                        </Center>
                    </VStack>
                </Box>
            </Center>
        </BasicLayout>
    );
};
export default LoginPage;
