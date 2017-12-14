import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./app/_models/User";
import {ServiceRequest} from "./app/_models/ServiceRequest";

export default createConnection( 
{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'username',
    password: 'password',
    database: 'VolunteerSystem',
    synchronize: true,
    logging: false,
    entities: [ServiceRequest, User],
    cli: {
        "entitiesDir": "_models",
        "migrationsDir": "migration",
        "subscribersDir": "subscriber"
     }
}).then(async connection =>
    {
        let userRepository = connection.getRepository(User);
        let serviceRepository = connection.getRepository(ServiceRequest);

       console.log("Inserting a new user into the database...");
        let user = new User();
        user.email = "test@gmail.com";
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.password = "test";
        user.systemRole = "admin";
        user.volunteerList = [];
        await userRepository.save(user);
        user.userId = connection.manager.getId(user);
        console.log("Saved a new user with id: " + user.userId);
    
        console.log("Loading users from the database...");

        let users = await userRepository.find();
        console.log("Loaded ALL users: ", users);
     
        console.log("Here you can setup and run express/koa/any other framework.");
    }).catch(error => console.log(error));
