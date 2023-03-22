import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity('users')
 class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 50})
    name: string

    @Column({length: 50, unique: true})
    email: string

    @Column({length: 120})
    cellphone: number
   
    @Column( {default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

 }

export { User }
