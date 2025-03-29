import {FieldValidator} from "@gevrek/utils";
export default class SendOTPRequest {
   sessionToken!: string;
   method!: string;
   allowedMethods = ["sms", "email"];

   constructor(data: any) {
      this.sessionToken = data.sessionToken;
      this.method = data.method;

      this.validate();
   }

   validate() {
      if (!FieldValidator.isSessionToken(this.sessionToken)) {
         throw new Error("Invalid sessionToken.");
      }

      if (!this.allowedMethods.includes(this.method)) {
         throw new Error("Invalid method.");
      }
   }
}
