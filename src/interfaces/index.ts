export interface IUser {
    id: string
    name: string
    email: string
    cellphone: boolean
    createdAt: Date
}

export interface IUserUpdate {
    id?: string
    name?: string
    email?: string
    cellphone?: boolean
    createdAt?: Date
}

