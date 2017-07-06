import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(elements: any, args: Array<any>): any {
    if (args[0] === undefined || elements.length == 0) return elements;
    return elements.filter(element => {
      let show:boolean = true;
      if (args.length > 0 && Object.keys(element).length > 0) {
        show = false;
        args[1].forEach(prop => {
          if (element[prop].toLowerCase().includes(args[0].toLowerCase())) show = true;
        });
      }
      return show;
    });
  }

}
