import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @Get()
    public getHello(): string {
        console.log('w');
        return this.appService.getHello();
    }
}
