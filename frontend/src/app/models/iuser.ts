export interface IUser {

    email: string;
    status: string;
    pseudo: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    status: string;
    password: string;
}

export interface IUserWithToken {
    userId: string;
    token: string;
}