import { Subjects, Publisher, PaymentCreatedEvent } from '@codehelp/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
