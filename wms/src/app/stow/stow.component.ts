import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-stow',
  templateUrl: './stow.component.html',
  styleUrls: ['./stow.component.css']
})
export class StowComponent{
  @ViewChild('cartIdRef') cartIdRef:ElementRef;
  @ViewChild('scanCode') scanCode:ElementRef;
  @ViewChild('quantityRef') quantityRef:ElementRef;
  @ViewChild('stowLocationRef') stowLocationRef:ElementRef;

  cartId = '';
  stowLocation = '';
  scanStowLocation = true;
  showQuantity = true;
  showBarcode = true;
  showCartBtn = true;

  showStowLocation(){
    if(this.cartId){
      setTimeout(() => this.stowLocationRef.nativeElement.focus(),200);
      this.scanStowLocation = false;
    }
  }
  showField(){
    if(this.stowLocation){
      setTimeout(() => this.scanCode.nativeElement.focus(),200);
      this.showQuantity = false;
      this.showBarcode = false;
      this.showCartBtn = false;
    }
  }
  formReset(){
    setTimeout(() => this.cartIdRef.nativeElement.focus(),200);
    this.showQuantity = true;
    this.showBarcode = true;
    this.showCartBtn = true;
    this.scanStowLocation = true;
    this.cartId = '';
  }
  scanItemBarcode(){
    setTimeout(() => this.scanCode.nativeElement.focus(),200);
    this.quantityRef.nativeElement.value = 1;
    this.scanCode.nativeElement.value = '';
  }
  
}
  