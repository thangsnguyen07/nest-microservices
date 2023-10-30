import { Controller, Get, Res } from '@nestjs/common'

import { Response } from 'express'

import { M2MClientAccess, Roles } from '@charliexndt/authz'

import { AppService } from '@services/app.service'

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @M2MClientAccess()
  @Roles(['ADMIN'])
  @Get()
  async getHello(@Res() response: Response) {
    const result = await this.appService.getUser()

    return response.status(200).json(result)
  }
}
