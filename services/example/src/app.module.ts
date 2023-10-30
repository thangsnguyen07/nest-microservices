import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'

import { AuthzGuard, AuthzModule } from '@charliexndt/authz'
import { CommonModule, RequestContextMiddleware } from '@charliexndt/common'

import { AppController } from '@controllers'

import { AppService } from '@services'

import configuration from './configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    // --- Import Authz Module ---
    AuthzModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        issuer: configService.get('auth.domain'),
        audience: configService.get('auth.audience'),
        m2mClientId: configService.get('auth.m2mClientId'),
      }),
    }),
    // --- Import Authz Module ---
    CommonModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // --- Provide Auth Module Options ---
    {
      provide: APP_GUARD,
      useClass: AuthzGuard,
    },
    // --- Provide Auth Module Options ---
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*')
  }
}
