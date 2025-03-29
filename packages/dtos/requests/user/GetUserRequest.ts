import {FieldValidator} from "@gevrek/utils";
export default class GetUserRequest {
    userId!: string;

    constructor(data: any) {
        this.userId = data.userId;

        this.validate();
    }

    validate() {
        if (!FieldValidator.isCUID(this.userId)) {
            throw new Error("INVALID_USER_ID");
        }

        return this;
    }

}
