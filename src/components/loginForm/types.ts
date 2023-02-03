export interface IUserCredentials {
    login:string,
    password:string
}

interface LoginResponse {
    success:boolean,
    message?:string
}

export interface ILoginForm {
    onFormSubmit(values: IUserCredentials):Promise<LoginResponse>
}