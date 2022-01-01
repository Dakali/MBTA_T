//angular module's
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
//component
import {Route} from "../routes";
import {RouteService} from "../../services/routeServices/route.service";


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {
  // @Input() route?: Route;
  route: Route | undefined

  constructor(
    //holds info about the "route"
    private rt: ActivatedRoute,
    //angular service for interacting with the browser
    private location: Location,
    //gets route data to display from the server
    private routeService: RouteService,
  ) {
  }

  ngOnInit(): void {
    this.getRoute()
  }

  getRoute(): void {
    // id when i will get data from the api !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const id = String(this.rt.snapshot.paramMap.get('attributes/id'));
    this.routeService.getRoute(id)
      .subscribe(route => this.route = route);
  }

  goBack(): void {
    this.location.back();
  }
}
