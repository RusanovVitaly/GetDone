export interface IUserCredentials {
  login: string;
  password: string;
}

export interface ILoginResponse {
  success: boolean;
  message?: string;
}

export interface ILoginForm {
  onFormSubmit(values: IUserCredentials): Promise<ILoginResponse>;
}
