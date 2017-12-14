import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Column} from "typeorm";
import { ServiceRequest } from "./serviceRequest";

@Entity()
export class User 
{
    @PrimaryGeneratedColumn()
    userId: number;
    
    @Column()
    systemRole: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    volunteerList: ServiceRequest[];
}