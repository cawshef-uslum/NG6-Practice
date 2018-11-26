import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-bulkstow',
  templateUrl: './bulkstow.component.html',
  styleUrls: ['./bulkstow.component.css']
})
export class BulkstowComponent{
  @ViewChild('cartIdRef') cartIdRef:ElementRef;
  @ViewChild('stowLocationRef') stowLocationRef:ElementRef;

  cartId = '';
  stowLocation = '';
  scanStowLocation = true;
  showCartBtn = true;

  showStowLocation(){
    if(this.cartId){
      console.log("works");
      setTimeout(() => this.stowLocationRef.nativeElement.focus(),200);
      this.scanStowLocation = false;
      this.showCartBtn = false;
    }
  }
  showField(){
    this.stowLocation = '';
    setTimeout(() => this.stowLocationRef.nativeElement.focus(),100);
  }
  formReset(){
    setTimeout(() => this.cartIdRef.nativeElement.focus(),200);
    this.showCartBtn = true;
    this.scanStowLocation = true;
    this.cartId = '';
  }
}
