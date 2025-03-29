import {FieldValidator} from "@gevrek/utils";
export default class LoginRequest {
    email!: string;
    password!: string;

    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("INVALID_EMAIL");
        }

        if (!FieldValidator.isPassword(this.password)) {
            throw new Error("INVALID_PASSWORD");
        }
    }
}