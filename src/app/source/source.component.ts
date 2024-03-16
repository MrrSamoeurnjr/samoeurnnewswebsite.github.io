import { Component , OnInit} from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrl: './source.component.css'
})
export class SourceComponent implements OnInit{
  constructor(private _service: NewserviceService){}
  topSourceDisplay:any = []
  ngOnInit(): void {
    this._service.topSource().subscribe((result) => {
      console.log(result)
      this.topSourceDisplay = result.articles
    })
  }
}
