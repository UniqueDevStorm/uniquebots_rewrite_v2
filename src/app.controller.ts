import {Controller, Get, Query, Render, Req, Res} from '@nestjs/common';
import {Response} from 'express'

@Controller()
export class AppController {
  @Get()
  public index(@Res() res: Response) {
    return res.render('index');
  }

  @Render('about')
  @Get('/about')
  public about() {
    return {};
  }
}
