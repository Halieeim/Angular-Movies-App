import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'movies-app';
  price = 55000;
  sellingPrice = 70000;
  imgURL = 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg';
  style = "width: 500px; height: auto;";
  rate = 0.78;
  power = 1250.5;
  today = new Date();
  intervalId: any;
  
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }
  ngOnDestroy(): void {
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }
  buttonTitle = "submiting-button";
  multipleclasses = "sample-bgcolor sample-fontcolor"
  NewTime() {
    console.log(new Date());
  }
  color = '';
  SetColor(color: string){
    this.color = color;
    console.log(color);
  }

  fullName = "Ahmed Abdelhafez";
}
