import { UserOmit } from "@gevrek/types";

export default interface GetUsersResponse {
    users: UserOmit[];
    total: number;
}