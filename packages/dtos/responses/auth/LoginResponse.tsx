import { UserOmit } from "@gevrek/types";
import { UserSessionOmit } from "@gevrek/types";

export default interface AuthResponse {
    user: UserOmit;
    userSession: UserSessionOmit;
}