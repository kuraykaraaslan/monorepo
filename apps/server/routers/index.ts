import { Router } from "express";
import V1Router from "./v1";
import ViewRouter from "./ViewRouter";
import { Logger } from "@gevrek/server-libs";
import { Limiter } from "@gevrek/server-libs";
import { Request, Response } from "express";


const IndexRouter = Router();

/*
 * Middlewares
 */
IndexRouter.use(Logger.useLogger);
IndexRouter.use(Limiter.useLimiter);

IndexRouter.get("/", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    return res.send({
        message: "Welcome to the Express Boilerplate",
        version: "2.0.0",
        developer: "Kuray Karaaslan",
        repo: "github.com/kuraykaraaslan/express-boilerplate",
        github: "github.com/kuraykaraaslan",
        linkedin: "linkedin.com/in/kuraykaraaslan",
    });
});


IndexRouter.use("/api/v1", V1Router);
IndexRouter.use("/views", ViewRouter);

IndexRouter.use((req, res) => {
    res.status(404).send({
        error: "NOT_FOUND"
    });
});

export default IndexRouter;