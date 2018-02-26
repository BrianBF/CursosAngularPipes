import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {

    value = value.toLowerCase();

    let nombres = value.split(" ");

    // console.log(value);
    for (let i in nombres ) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1)
    }
    // console.log(args);

    return "Hola mundo";
  }

}
