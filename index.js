"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./app/_models/User");
const ServiceRequest_1 = require("./app/_models/ServiceRequest");
exports.default = typeorm_1.createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'username',
    password: 'password',
    database: 'VolunteerSystem',
    synchronize: true,
    logging: false,
    entities: [ServiceRequest_1.ServiceRequest, User_1.User],
    cli: {
        "entitiesDir": "_models",
        "migrationsDir": "migration",
        "subscribersDir": "subscriber"
    }
}).then((connection) => __awaiter(this, void 0, void 0, function* () {
    let userRepository = connection.getRepository(User_1.User);
    let serviceRepository = connection.getRepository(ServiceRequest_1.ServiceRequest);
    console.log("Inserting a new user into the database...");
    let user = new User_1.User();
    user.email = "test@gmail.com";
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.password = "test";
    user.systemRole = "admin";
    user.volunteerList = [];
    yield userRepository.save(user);
    user.userId = connection.manager.getId(user);
    console.log("Saved a new user with id: " + user.userId);
    console.log("Loading users from the database...");
    let users = yield userRepository.find();
    console.log("Loaded ALL users: ", users);
    console.log("Here you can setup and run express/koa/any other framework.");
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map