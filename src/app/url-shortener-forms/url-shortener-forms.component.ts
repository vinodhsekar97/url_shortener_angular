import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-shortener-forms',
  templateUrl: './url-shortener-forms.component.html',
  styleUrls: ['./url-shortener-forms.component.css']
})
export class UrlShortenerFormsComponent implements OnInit {

  urlForm;
  

  constructor(private urlService: UrlService, private router: Router) {
    this.urlForm = new FormGroup({
      longUrl : new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  sendUrl(){
    if(this.urlForm.valid){
      this.urlService.postLongUrl(this.urlForm.value).subscribe((data) => {
        alert("message sent");
        /* console.log(data.short); */
        this.router.navigate(['/urltable']);
      })
    }
  }

}
