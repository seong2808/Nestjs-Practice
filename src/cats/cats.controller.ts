import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';


@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @Get()
  getAllCat() {
    console.log('hello controller');
    // return { cats: 'all cat' };
    return this.service.hiCatServiceProduct();
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateParticalCat() {
    return ' update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
