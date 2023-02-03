export interface IFormFields{
    login:string,
    password:string
}

interface LoginResponse {
    success:boolean,
    message?:string
}

export interface ILoginForm {
    onFormSubmit(values:IFormFields):Promise<LoginResponse>
}