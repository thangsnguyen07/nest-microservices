import { Controller, Get, Logger } from '@nestjs/common'

import { AppService } from '@services'

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name)

  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<any> {
    try {
      return await this.appService.getAll()
    } catch (error) {
      this.logger.log(error.message)
    }
  }
}
