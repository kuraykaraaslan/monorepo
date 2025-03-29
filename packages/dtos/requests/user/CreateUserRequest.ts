import {FieldValidator} from "@gevrek/utils";
export default class CreateUserRequest {
    email!: string;
    password!: string;
    name?: string;

    constructor(data: CreateUserRequest) {
        this.email = data.email;
        this.password = data.password;
        this.name = data.name;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("Invalid email address");
        }

        if (!FieldValidator.isPassword(this.password)) {
            throw new Error("Invalid password");
        }

        if (this.name && !FieldValidator.isName(this.name)) {
            throw new Error("Invalid name");
        }
    }
}