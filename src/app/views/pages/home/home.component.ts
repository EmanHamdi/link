import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import News from "../../../../assets/json/news_listing.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ContentCarousels = [
    { img: './assets/img/carousel/Layer1.png', title: 'Al Foundation', prag: 'is focused on inspiring the next generation of kids Healthcare professionals.' },
    { img: './assets/img/carousel/Layer27.png', title: 'Al Foundation', prag: 'is focused on inspiring the next generation of kids Healthcare professionals.' },

  ]

  news: any = (News as any).default;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.news = News.articles.slice(0, 6);
  }

}
