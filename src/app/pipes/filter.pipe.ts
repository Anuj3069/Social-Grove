import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(user: any, searchValue:string) {
    if(user.length===0 || searchValue===''){
      return user;
    }

    return user.filter((lock:any) => {
      return (lock.name.toUpperCase().match(searchValue.toUpperCase()));
    });
    }
   
   
  }


