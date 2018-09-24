import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  searchWord: String = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.apiService.searchWord);
  }

}
