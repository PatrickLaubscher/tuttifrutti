import { Component, inject, OnInit } from '@angular/core';
import { Fruit } from '../shared/entities';
import { FruitService } from '../shared/services/fruit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  fruitService = inject(FruitService);

  fruitsList:Fruit[] = [];

  fetchAllFruits() {
    this.fruitsList = this.fruitService.fetchAllFruits();
  }

  ngOnInit(): void {
    this.fetchAllFruits();
  }

  addQuantity(fruit: Fruit) {
    fruit.quantite ++;
  }

  diminishQuantity(fruit: Fruit) {
    if(fruit.quantite <= 0) {
      fruit.quantite = 0;
    } else {
      fruit.quantite --;
    }
  }

}
