import { Component, OnInit } from '@angular/core';
import { CardDetailsService } from 'app/services/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  cardDetails;
  constructor(private cardDetailsService:CardDetailsService) { }

  ngOnInit(): void {
    this.cardDetails = this.cardDetailsService.cardDetais;
    console.log(this.cardDetails);

  }

}
