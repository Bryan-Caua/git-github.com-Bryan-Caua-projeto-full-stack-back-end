import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm";
import { User } from "./users.entity";

@Entity('contatos')
 class Contacts {
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
    
    @ManyToOne(() => User, {eager: true, nullable: true})
    user: User
 }

export { Contacts }
