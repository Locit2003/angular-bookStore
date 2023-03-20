import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data:any = [];

  constructor(private app: AppService){}


  ngOnInit(): void {
    this.app.listProducts().subscribe((res:any)=>{
      this.data = res.result;
    });
  }
  
}
