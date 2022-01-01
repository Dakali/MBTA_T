//angular module's
import {Component, OnInit} from '@angular/core';
//components
import {Route} from "../routes";
import {RouteService} from "../../services/routeServices/route.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  routes: Route[] = [];

  constructor(private routeService: RouteService) {
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routeService.getRoutes()
      // returning the top4 of cliked routes
      .subscribe(routes => this.routes = routes.slice(1, 5))
  }

}
