import { User } from "../../CS341-VolunteerSchedule-master/src/entity/User";

export class ServiceRequest {
    title: String;
    serviceId: number;
    startTime: Date;
    endTime: Date;
    dateOf: Date;
    location: String;
    volunteersNeeded: number;
    numVolunteers: number;
    volunteerList: String[];
}