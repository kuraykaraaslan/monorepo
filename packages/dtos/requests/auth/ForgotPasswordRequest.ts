import {FieldValidator} from "@gevrek/utils";
export default class ForgotPasswordRequest {
    email!: string;

    constructor(data: any) {
        this.email = data.email;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("INVALID_EMAIL");
        }
    }
}
