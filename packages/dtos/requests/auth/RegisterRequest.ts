import {FieldValidator} from "@gevrek/utils";
export default class RegisterRequest {
    email!: string;
    password!: string;
    phone?: string;
    name?: string;    

    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;
        this.phone = data.phone;
        this.name = data.name;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("INVALID_EMAIL");
        }

        if (!FieldValidator.isPassword(this.password)) {
            throw new Error("INVALID_PASSWORD");
        }

        if (this.phone && !FieldValidator.isPhone(this.phone)) {
            throw new Error("INVALID_PHONE");
        }

        if (this.name && !FieldValidator.isName(this.name)) {
            throw new Error("INVALID_NAME");
        }
    }
}