import { Component , OnInit} from '@angular/core';
import { NewserviceService } from '../service/newservice.service';
@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrl: './domains.component.css'
})
export class DomainsComponent implements OnInit{
constructor( private _service:NewserviceService){}
topDomainDisplay:any = []
ngOnInit(): void {
  this._service.topDomain().subscribe((result) => {
    console.log(result);
    this.topDomainDisplay = result.articles;
  })
}
}
