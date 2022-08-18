import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lipamain';
  

  constructor(@Inject(Router) private router:Router){}

  ngOnInit(): void {
    //console.log(this.router.url);
    this.router.navigate(['/'])
    
  }

}
