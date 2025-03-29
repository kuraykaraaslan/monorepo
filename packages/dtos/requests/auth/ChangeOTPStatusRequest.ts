import {FieldValidator} from "@gevrek/utils";
export default class ChangeOTPStatusRequest {
    otpEnabled!: boolean;

    constructor(otpEnabled: boolean) {
        this.otpEnabled = otpEnabled;

        this.validate();
    }

    validate() {
        if (FieldValidator.isBoolean(this.otpEnabled)) {
            throw new Error("Invalid OTP status.");
        }
    }
}