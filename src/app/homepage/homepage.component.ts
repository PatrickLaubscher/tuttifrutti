import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CartItem, Fruit } from '../shared/entities';
import { FruitService } from '../shared/services/fruit.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../shared/services/cart.service';
import { TtcPricePipe } from '../shared/services/pipes/ttc-price.pipe';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TtcPricePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit, AfterViewInit, AfterViewChecked {

  fruitService = inject(FruitService);
  cartService = inject(CartService);

  fruitsList:Fruit[] = [];
  cartItems:CartItem[] = [];
  totalNetPrice:number = 0;
  totalQty:number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  fetchAllFruits() {
    this.fruitsList = this.fruitService.fetchAllFruits();
  }

  addQuantity(fruit: Fruit) {
    fruit.quantite ++;
    this.cdr.detectChanges();
  }

  diminishQuantity(fruit: Fruit) {
    if(fruit.quantite <= 0) {
      fruit.quantite = 0;
    } else {
      fruit.quantite --;
    }
    this.cdr.detectChanges();
  }

  displayCart() {
    this.cartService.loadCart();
    this.cartItems = this.cartService.getItems();
    this.cdr.detectChanges();
  }

  displayTotalNet() {
    this.cartService.loadTotalNetPrice();
    this.totalNetPrice = this.cartService.getTotalNetPrice();
    this.cdr.detectChanges();
  }

  displayTotalQty() {
    this.cartService.loadTotalQty();
    this.totalQty = this.cartService.getTotalQty();
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.fetchAllFruits();
    this.displayCart();
    this.displayTotalNet();
    this.displayTotalQty();
  }

  ngAfterViewInit(): void {
    this.displayCart();
    this.displayTotalNet();
    this.displayTotalQty();
  }

  ngAfterViewChecked(): void {
    this.displayCart();
    this.displayTotalNet();
    this.displayTotalQty();
  }

}
