import {Entity, ManyToMany, OneToOne, JoinTable, JoinColumn, PrimaryGeneratedColumn, Column} from "typeorm";
import { User } from "./user";

@Entity()
export class ServiceRequest 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @Column()
    dateOf: Date;

    @Column()
    location: string;

    @Column()
    volunteersNeeded: number;

    @Column()
    numVolunteers: number;

    @Column()
    signedUp: boolean;
}