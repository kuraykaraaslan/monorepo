export * from './generated/client';
import { PrismaClient } from './generated/client';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
const prisma = new PrismaClient();
export { prisma };
