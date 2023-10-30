import { Injectable } from '@nestjs/common'

import { PrismaService } from '@charliexndt/common'

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}
  getHello(): string {
    return 'Hello World 2!'
  }

  async getUser(): Promise<any> {
    return await this.prismaService.user.findMany()
  }
}
