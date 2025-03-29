/**
 * SocialAccountRouter.tsx
 * 
 * This module provides endpoints to manage user social account operations such as adding, updating, and deleting social accounts.
 * It uses the AuthService to interact with the database and perform necessary actions.
 */
import { Router, Request, Response } from "express";

// Utils
import {FieldValidator} from "@gevrek/utils";

// DTOs
import GetSSOLinkRequest from "@gevrek/dtos/requests/sso/GetSSOLinkRequest";
import LoginResponse from "@gevrek/dtos/responses/auth/LoginResponse";
import EmptyRequest from "@gevrek/dtos/requests/EmptyRequest";
import GetSessionRequest from "@gevrek/dtos/requests/auth/GetSessionRequest";
import {SSOService} from "@gevrek/server-services";
import {AuthService} from "@gevrek/server-services";
//import {MailService} from "@gevrek/server-services";


const APP_URL = process.env.APPLICATION_HOST + ":" + process.env.APPLICATION_PORT;
const FRONTEND_URL = process.env.FRONTEND_HOST + ":" + process.env.FRONTEND_PORT;
const FRONTEND_CALLBACK_PATH = "/auth/sso";
const ALLOWED_PROVIDERS = process.env.ALLOWED_PROVIDERS ? process.env.ALLOWED_PROVIDERS.split(",") : [];

// Constants
const INVALID_PROVIDER = "INVALID_PROVIDER";
const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";
const OAUTH_ERROR = "OAUTH_ERROR";


const ssoRouter = Router();

/**
 * POST /sso
 * Get User and User Session
 * 
 */
ssoRouter.post('/', async (request: Request<GetSessionRequest>, response: Response<LoginResponse>) => {


    console.log(request.body);

    if (!FieldValidator.validateBody(request.body, GetSessionRequest)) {
        throw new Error("BAD_REQUEST");
    }

    return await AuthService.getSession(request.body);
});

/**
 * GET /sso/:provider
 * SSO page.
 * 
 * Redirects to the SSO provider's login page.
 * 
 */
ssoRouter.get('/:provider', async (request: Request<GetSSOLinkRequest>, response: Response) => {

    if (!FieldValidator.validateBody(request.body, EmptyRequest)) {
        throw new Error("BAD_REQUEST");
    }

    const provider = request.params.provider! as string;

    if (!ALLOWED_PROVIDERS.includes(provider)) {
        throw new Error(INVALID_PROVIDER);
    }

    const url = await SSOService.generateAuthUrl(provider);

    return response.redirect(url);

});

/**
 * GET /callback/:provider
 * Create a new user or authenticate an existing user using the SSO provider.
 */
ssoRouter.get('/callback/:provider', async (request: Request<any>, response: Response<LoginResponse>) => {

    if (!FieldValidator.validateBody(request.body, EmptyRequest)) {
        throw new Error("BAD_REQUEST");
    }

    const provider = request.params.provider! as string;

    if (ALLOWED_PROVIDERS.includes(provider)) {
        throw new Error("INVALID_PROVIDER");
    }

    var { code, state } = request.query;

    //if code and state are not present, then try to get it from the body
    if (!code) {
        code = request.body.code;
        state = request.body.state;
    }

    if (!code) {
        //redirect to frontend
        throw new Error(AUTHENTICATION_FAILED);
    }

    const user = await SSOService.authCallback(provider, code as string, state as string);

    if (!user) {
        //redirect to frontend
        throw new Error(AUTHENTICATION_FAILED);
    }

    const userSession = await AuthService.createSession(user, request);

    //MailService.sendWelcomeEmail(user);

    if (!userSession) {
        //redirect to frontend
        throw new Error(OAUTH_ERROR);
    }

    //redirect to frontend
    return response.redirect(`${FRONTEND_URL}${FRONTEND_CALLBACK_PATH}?token=${userSession.sessionToken}`);

});

// same but post 
ssoRouter.post('/callback/:provider', async (request: Request<any>, response: Response<LoginResponse>) => {

    if (!FieldValidator.validateBody(request.body, EmptyRequest)) {
        throw new Error("BAD_REQUEST");
    }

    const provider = request.params.provider! as string;

    if (ALLOWED_PROVIDERS.includes(provider)) {
        throw new Error("INVALID_PROVIDER");
    }

    var { code, state } = request.query;

    //if code and state are not present, then try to get it from the body
    if (!code) {
        code = request.body.code;
        state = request.body.state;
    }

    if (!code) {
        //redirect to frontend
        throw new Error(AUTHENTICATION_FAILED);
    }

    const user = await SSOService.authCallback(provider, code as string, state as string);

    if (!user) {
        //redirect to frontend
        throw new Error(AUTHENTICATION_FAILED);
    }

    const userSession = await AuthService.createSession(user, request);

    //MailService.sendWelcomeEmail(user);

    if (!userSession) {
        //redirect to frontend
        throw new Error(OAUTH_ERROR);
    }

    //redirect to frontend
    return response.redirect(`${FRONTEND_URL}${FRONTEND_CALLBACK_PATH}?token=${userSession.sessionToken}`);

});

export default ssoRouter;