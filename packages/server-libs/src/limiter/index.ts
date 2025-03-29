import { rateLimit } from 'express-rate-limit'
import { Request, Response } from 'express';

const RATE_LIMIT_WINDOW_MS = process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = process.env.RATE_LIMIT_MAX || 100;

export default class Limiter {
	static limiter = rateLimit({
		windowMs: Number(RATE_LIMIT_WINDOW_MS),
		max: Number(RATE_LIMIT_MAX),
		message: (request: Request, response: Response) => {
			return { error: 'RATE_LIMIT_EXCEEDED' };
		},
		headers: true,
		keyGenerator: function (request: Request) {
			const key = request.ip;
			if (!key) {
				throw new Error("IP address is required for rate limiting");
			}
			return key;
		}

	});

	static authLimiter = rateLimit({
		windowMs: Number(RATE_LIMIT_WINDOW_MS),
		max: 10,
		message: (request: Request, response: Response) => {
			return { error: 'RATE_LIMIT_EXCEEDED_AUTH' };
		},
		headers: true,
		keyGenerator: function (request: Request) {
			const key = request.ip;
			if (!key) {
				throw new Error("IP address is required for rate limiting");
			}
			return key;
		}

	});


	static useLimiter(request: any, response: any, next: any) {
		Limiter.limiter(request, response, next);
	}

	static useAuthLimiter(request: any, response: any, next: any) {
		Limiter.authLimiter(request, response, next);
	}
}

