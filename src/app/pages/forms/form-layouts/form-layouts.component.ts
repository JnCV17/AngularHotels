import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel';
import { HotelService } from '../../../services/hotels.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {
	
  nombre: string = '';
  precio: number = 0;
  latitud: number = 0;
  longitud: number = 0;
  locationChosen = false;
  starRate = 0;

  ngOnInit() {

  }

  constructor(private hotelService: HotelService) { }

	onChoseLocation(event) {
    	this.latitud = event.coords.lat;
    	this.longitud = event.coords.lng;
    	this.locationChosen = true;
 	}

  addHotel() {
    if (this.latitud != 0) {
      this.hotelService.addNewHotel(this.nombre, this.precio, this.latitud, this.longitud, this.starRate);
      this.nombre = '';
      let pr: number;
      this.precio = pr;
      this.locationChosen = false;
      this.starRate = 0;
      alert('El hotel se creo exitosamente');
    }
  }

}
