import { AuthService } from './../../services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public config: ConfigService,
    public auth:AuthService
  ) { }

  ngOnInit() {
  }

}
