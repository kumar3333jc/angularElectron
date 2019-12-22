import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Form1Page2Status {

  options: any = [{"valueField":"","displayField":""},{"valueField":"Option2","displayField":"Individual"},{"valueField":"Option3","displayField":"Hindu undivided family"},{"valueField":"Option4","displayField":"Firm"},{"valueField":"Option5","displayField":"Body of individuals"},{"valueField":"Option6","displayField":"Company"}];



  public getOptions(): any {
	const optionsObservable = new Observable(observer => {
		observer.next(this.options);
	});
	return optionsObservable;
  }

  
}
