import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any{
    let update = {
      status: "up"
    }
    return update
  }
}
