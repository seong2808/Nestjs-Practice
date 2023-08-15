import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.catService.hiCatServiceProduct();
  }
}
