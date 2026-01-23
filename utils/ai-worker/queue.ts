import dotenv from 'dotenv'

dotenv.config({ path: '../../.env.local' })

console.log('ENV CHECK', {
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD ? 'SET' : 'MISSING',
})
import { Queue } from 'bullmq';

import IORedis from 'ioredis';

export const connection = {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
    username: "default",
    maxRetriesPerRequest: null,
};

export const redisClient = new IORedis(connection);

export const aiQueue = new Queue('ai', { connection });
export const votingQueue = new Queue('voting', { connection });
export const judgeQueue = new Queue('judge', { connection });