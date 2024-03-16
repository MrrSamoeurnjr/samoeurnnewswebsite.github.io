import { Component , OnInit} from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit{
  constructor(private _service: NewserviceService){}
  topBusinessDisplay:any = []
  ngOnInit(): void {
      this._service.topBusiness().subscribe((result) => {
        console.log(result);
        this.topBusinessDisplay = result.articles;
      })
  }
}
