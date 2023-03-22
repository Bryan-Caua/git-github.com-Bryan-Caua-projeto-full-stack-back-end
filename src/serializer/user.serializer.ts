import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserUpdate } from '../interfaces/index'

const userSerializer: SchemaOf<IUser> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cellphone: yup.number().required(),
})

const userSerializerUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    cellphone: yup.string().notRequired()
})



export {userSerializer, userSerializerUpdate}