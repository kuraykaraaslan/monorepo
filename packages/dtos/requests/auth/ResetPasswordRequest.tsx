import {FieldValidator} from "@gevrek/utils";
export default class ResetPasswordRequest {
    email!: string;
    password!: string;
    resetToken!: string;

    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;
        this.resetToken = data.resetToken;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("INVALID_EMAIL");
        }

        if (!FieldValidator.isPassword(this.password)) {
            throw new Error("INVALID_PASSWORD");
        }

        if (!FieldValidator.isVerificationToken(this.resetToken)) {
            throw new Error("INVALID_RESET_TOKEN");
        }
    }
}
