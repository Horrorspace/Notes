import {NestFactory} from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {AppModule} from './app.module';


async function start() {
    try {
        console.log(`mode is: ${process.env.NODE_ENV}`);

        const PORT: number = Number(process.env.PORT) || 3000;
    
        const app = await NestFactory.create<NestFastifyApplication>(
            AppModule,
            new FastifyAdapter({
                logger: true
            })
        );
        await app.listen(3000, '0.0.0.0');
        console.log(`HTTP server has been started on port ${PORT}...`);
    }
    catch(e) {
        console.error(e);
    }
}

start();