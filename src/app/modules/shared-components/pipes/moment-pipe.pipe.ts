import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  // Read more about moment.js in https://momentjs.com/
  transform(value: any,
            outputFormat: string = 'llll',
            inputFormat: string = 'YYYY-MM-DD hh:mm:ss',
            locale: string = 'en'): any {

    // Configure locale (English by default)
    moment.locale(locale);

    const output = outputFormat !== 'relative'
      ? moment(value, inputFormat).format(outputFormat) : moment(value, inputFormat).fromNow();

    return output;
  }

}
