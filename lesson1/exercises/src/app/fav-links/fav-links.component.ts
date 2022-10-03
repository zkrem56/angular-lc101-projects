import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.slcl.org', 'https://www.troopwebhost.org/Troop778Fenton/Index.htm', 'https://www.launchcode.org']
  constructor() { }

  ngOnInit() {
  }

}
