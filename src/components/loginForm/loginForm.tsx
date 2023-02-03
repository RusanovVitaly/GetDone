import React from "react";
import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import {Button, FormControl, FormErrorMessage, Input} from "@chakra-ui/react";
import {IUserCredentials, ILoginForm} from "./types";


export const LoginForm: React.FC<ILoginForm> = ({onFormSubmit}) => {

    const initialValues: IUserCredentials = {
        login: "",
        password: ""
    }

    const onFormSubmitHandler = async (values: FormikValues, actions: FormikHelpers<IUserCredentials>) => {
        const result = await onFormSubmit(values as IUserCredentials);
        if (!result.success) actions.setSubmitting(false);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onFormSubmitHandler}>
            {(props) => (
                <Form>
                    <Field name='login'>
                        {({field, form}: FormikValues) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <Input {...field} placeholder='Логин'/>
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='password'>
                        {({field, form}: FormikValues) => (
                            <FormControl mt={2} isInvalid={form.errors.name && form.touched.name}>
                                <Input {...field} placeholder='Пароль'/>
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button mt={4} colorScheme='green' isLoading={props.isSubmitting} type='submit'>
                        Войти
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

