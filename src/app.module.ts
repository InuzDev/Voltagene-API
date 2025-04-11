import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [ContactModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
