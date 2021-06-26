import { RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CardDetailsService } from 'app/services/card-details.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('Card') cardss;
  searchText;
  constructor(private cardDetailsService: CardDetailsService, router: RouterModule) { }

  ngOnInit(): void {
  }
  getCardByID(cardData) {
    console.log(cardData);
    this.cardDetailsService.cardDetais = cardData;
  }
}
