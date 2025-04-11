// contact.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '../mailer/mailer.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) { }

  async sendContactEmail(contactData: CreateContactDto) {
    return this.mailerService.sendContactEmail(contactData);
  }
}
