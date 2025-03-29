import {FieldValidator} from "@gevrek/utils";
export default class PutUserRequest {
    userId!: string;
    email!: string;
    name?: string;
    phone?: string;
    address?: string;
    role?: string;

    constructor(data: PutUserRequest) {
        this.email = data.email;
        this.name = data.name;
        this.phone = data.phone;
        this.address = data.address;
        this.role = data.role;

        this.validate();
    }

    validate() {

        if (!FieldValidator.isCUID(this.userId)) {
            throw new Error("INVALID_USER_ID");
        }
        
        if (!FieldValidator.isEmail(this.email)) {
            throw new Error("INVALID_EMAIL");
        }

        if (this.name ? !FieldValidator.sanitizeString(this.name) : false) {
            throw new Error("INVALID_NAME");
        }

        if (this.phone ? !FieldValidator.isPhone(this.phone) : false) {
            throw new Error("INVALID_PHONE");
        }

        if (this.address ? !FieldValidator.sanitizeString(this.address) : false) {
            throw new Error("INVALID_ADDRESS");
        }

        if (this.role ? !FieldValidator.isRole(this.role) : false) {
            throw new Error("INVALID_ROLE");
        }

        return this;
    }
}