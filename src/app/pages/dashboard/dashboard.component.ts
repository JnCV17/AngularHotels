import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotels.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

	  hotelesFiltrados: Hotel[];
  	sizeHotels: number;
  	closeResult: string;
    selectedHotel: Hotel
    hoteles: Hotel[] = [];
    nombreHotelBuscado: string = '';
    mensaje: string = '';;

	constructor(private hotelService: HotelService, private modalService: NgbModal) { }

	ngOnInit(){
    this.loadFilteredHotels();
    this.loadSizeHotels();
	  }

  loadFilteredHotels() {
    this.hotelService.hotelesFiltrados.subscribe(hoteles => {
      this.hotelesFiltrados = hoteles;
    });
  }

  loadSizeHotels() {
    this.hotelService.getSizeHotels().subscribe(size => {
      this.sizeHotels = size;
    });
  }

  callHotel(hotel: Hotel) {
    alert(hotel.nombre);
  }

  open(content, hotel: Hotel) {
    const activeModal = this.modalService.open(content, { size: 'lg', container: 'nb-layout' });
    this.selectedHotel = hotel;
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(x => {
      this.hoteles = x;
    });
  }

  filter() {
    let resultado = this.hotelService.filterHotels(this.hoteles, this.nombreHotelBuscado);
    this.mensaje = resultado.mensaje;
    this.hotelService.setHotelesFiltrados(resultado.hoteles);
    this.hotelService.setSizeHotels(resultado.sizeH);
  }

}
