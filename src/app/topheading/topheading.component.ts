import { Component , OnInit} from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrl: './topheading.component.css'
})
export class TopheadingComponent implements OnInit{
constructor(private _service: NewserviceService){}
topheadingDisplay:any = [];
ngOnInit(): void {
  this._service.topHeading().subscribe((result) => {
    console.log(result)
    this.topheadingDisplay = result.articles;
  })
}
}
