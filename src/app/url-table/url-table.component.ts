import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-table',
  templateUrl: './url-table.component.html',
  styleUrls: ['./url-table.component.css']
})
export class UrlTableComponent implements OnInit {

  urls;
  constructor(private urlService: UrlService, private router : Router) { 
  }

  ngOnInit(): void {
    this.urlService.getUrls().subscribe((data) => {
      console.log(data);
      this.urls = data;
    })
  }

  deleteUrl(short){
    console.log(short);
    this.urlService.deleteUrl(short).subscribe((data) => {
      console.log(data);
      alert("success deleted");
    })
  }

  navigateUrl(){
    this.router.navigate(['/']);
  }
}
