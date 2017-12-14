import {Entity, ManyToMany, OneToOne, JoinTable, JoinColumn, PrimaryGeneratedColumn, Column} from "typeorm";
import { User } from "./user";
import { ServiceRequest } from "./serviceRequest";

@Entity()
export class ServiceRequestVolunteers
{
   @JoinColumn()
   userId : User;

   @JoinColumn()
   serviceId: ServiceRequest;
}