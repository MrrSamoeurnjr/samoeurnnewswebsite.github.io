import { Component , OnInit} from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrl: './tesla.component.css'
})
export class TeslaComponent implements OnInit{
  constructor(private _service: NewserviceService){}
  topTechnologyDisplay:any = []
  ngOnInit(): void {
      this._service.topTechnology().subscribe((result) => 
      {
        console.log(result);
        this.topTechnologyDisplay = result.articles
      })
  }
}
