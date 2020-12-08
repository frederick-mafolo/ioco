import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import{PeopleListService} from '../people-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private peopleListService: PeopleListService) { }

  ngOnInit(): void {
  }
  goToPeople() {
 
  }
}
