import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Hotel Search #1',
    source: 'assets/images/camera5.jpg',
  }];

  selectedCamera: any = this.cameras[0];

}
