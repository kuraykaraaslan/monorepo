import {FieldValidator} from "@gevrek/utils";
export default class VerifyOTPRequest {
   sessionToken!: string;
   otpToken!: string;

   constructor(data: any) {
      this.sessionToken = data.sessionToken;
      this.otpToken = data.otpToken;

      this.validate();
   }

   validate() {
      if (!FieldValidator.isSessionToken(this.sessionToken)) {
         throw new Error("Invalid sessionToken.");
      }

      if (!FieldValidator.isVerificationToken(this.otpToken)) {
         throw new Error("Invalid OTP.");
      }
   }
}
