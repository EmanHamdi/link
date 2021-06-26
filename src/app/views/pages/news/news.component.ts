import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Newss from "../../../../assets/json/news_listing.json";
import Category from "../../../../assets/json/news_category-listing.json";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  allNews: any = (Newss as any).default;
  allCategory: any = (Category as any).default;
  constructor(private httpClient: HttpClient) {

  }

  searchword;
  ngOnInit(): void {
    this.allNews = Newss.articles;
    this.allCategory = Category.sourceCategory;
    console.log(this.allNews)
  }

  newArray
  searchThis(data) {
    console.log('Data', data);
    console.log(data)
    if (data) {
      this.allNews = this.allNews.filter(function (ele, i, array) {
        let arrayelement = ele.title.toLowerCase()
        return arrayelement.includes(data)
      })
    }
    else {
      console.log('test 1', this.allNews)
    }
    console.log('test 2', this.allNews)
  }

}

