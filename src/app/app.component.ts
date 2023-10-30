import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/data-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mowish';
  jsonData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }
}
