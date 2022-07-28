import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // express의 Controller이자 Router라고 생각!
  // Decorator(@Get, @Post, ...)와 function 또는 class 사이에 공백이 있어선 안된다.
  // 이처럼 해도 브라우저에 Hello Everyone이 출력되는데 왜 getHello는 appService의 getHello를 return하는가
  // nestJS는 controller와 business login을 구분하고 싶어하기 때문!
  @Get("/hello")
  sayHello(): string {
    return this.appService.getHi();
  }
}
