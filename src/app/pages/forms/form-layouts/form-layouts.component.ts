import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
	starRate = 2;
	latitud: number = 0;
  longitud: number = 0;
  locationChosen = false;

	onChoseLocation(event) {
    	this.latitud = event.coords.lat;
    	this.longitud = event.coords.lng;
    	this.locationChosen = true;
 	}

}
