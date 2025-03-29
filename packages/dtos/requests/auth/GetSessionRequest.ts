import {FieldValidator} from "@gevrek/utils";

export default class GetSessionRequest {
   sessionToken!: string;

   constructor(data: any) {
      this.sessionToken = data.sessionToken;

      this.validate();
   }

   validate() {
      if (!FieldValidator.isSessionToken(this.sessionToken)) {
         throw new Error("INVALID_SESSION_TOKEN");
      }
   }

   static fromJson(json: any): GetSessionRequest {
      return new GetSessionRequest(json.sessionToken);
   }
}
