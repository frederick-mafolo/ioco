import { Component, OnInit } from '@angular/core';
import{PeopleListService} from '../people-list.service';
import{Config} from '../modal';


@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})


export class PeoplePageComponent implements OnInit {
  config: Config;
  peopleObj= {}
  constructor(private peopleListService: PeopleListService) { }

  ngOnInit(): void {
    this.peopleListService.getConfig()
    .subscribe(data => {
      this.peopleObj=data
      console.log(this.peopleObj)
    });
  }
  // showConfig() {
  //   this.peopleListService.getConfig()
  //   .subscribe(data => this.config = {
  //     peopleUrl: (data as any).baseURL + "people/1/",
  //     textfile:  (data as any).textfile,
  //   });
  // }
}
