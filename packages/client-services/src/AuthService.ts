import { axiosInstance } from "@gevrek/client-libs";
// DTOs
import LoginResponse from "@gevrek/dtos/responses/auth/LoginResponse";
import MessageResponse from "@gevrek/dtos/responses/MessageResponse";
import LoginRequest from "@gevrek/dtos/requests/auth/LoginRequest";
import ForgotPasswordRequest from "@gevrek/dtos/requests/auth/ForgotPasswordRequest";
import ResetPasswordRequest from "@gevrek/dtos/requests/auth/ResetPasswordRequest";
import GetSessionRequest from "@gevrek/dtos/requests/auth/GetSessionRequest";
import RegisterRequest from "@gevrek/dtos/requests/auth/RegisterRequest";

// Utils
import { createId } from '@paralleldrive/cuid2';

import {FieldValidator} from "@gevrek/utils";
import {UserAgentUtil} from "@gevrek/utils";

import {UserSessionOmit} from "@gevrek/types";
import {UserOmit} from "@gevrek/types";

import VerifyOTPRequest from "@gevrek/dtos/requests/auth/VerifyOTPRequest";
import SendOTPRequest from "@gevrek/dtos/requests/auth/SendOTPRequest";
import ChangeOTPStatusRequest from "@gevrek/dtos/requests/auth/ChangeOTPStatusRequest";
import ChangeOTPVerifyRequest from "@gevrek/dtos/requests/auth/ChangeOTPVerifyRequest";

export default class AuthService {

    static async login(data: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await axiosInstance.post<LoginResponse>('/auth/login', data);
            return response.data;
        }
        catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }
}


