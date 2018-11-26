import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent {
  
  @ViewChild('scanCode') scanCode:ElementRef;
  @ViewChild('cartIdRef') cartIdRef:ElementRef;
  @ViewChild('quantityRef') quantityRef:ElementRef;
  cartId = '';
  showQuantity = true;
  showBarcode = true;
  showCart = true;

  showField(){
    if(this.cartId){
      this.showQuantity = false;
      this.showBarcode = false;
      this.showCart = false;
      setTimeout(() => this.scanCode.nativeElement.focus(),100);
    }
  }
  formReset(){
      this.showQuantity = true;
      this.showBarcode = true;
      this.showCart = true;
      this.cartId = '';
      setTimeout(() => this.cartIdRef.nativeElement.focus(),100);
  }
  scanItemBarcode(){
    console.log(this.quantityRef.nativeElement.value);
    this.quantityRef.nativeElement.value = 1;
    this.scanCode.nativeElement.value='';
    setTimeout(() => this.scanCode.nativeElement.focus(),100);
    
  }
}
