import { Injectable } from '@nestjs/common'

import { PrismaService } from '@charliexndt/common'

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<any> {
    return await this.prismaService.example.findMany()
  }
}
