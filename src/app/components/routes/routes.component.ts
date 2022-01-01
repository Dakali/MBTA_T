//angular module's
import {Component, OnInit} from '@angular/core';
//components
import {Route} from "../routes";
import {ROUTES} from "../mock-routes";
import {RouteService} from "../../services/routeServices/route.service";
import {MessageService} from "../../services/messageServices/message.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  // route: Routes = {
  //   name: "",
  //   direction: "",
  //   type: 0,
  // }

  // routes = ROUTES;
  routes: Route[] = [];
  // routes: Route[] | undefined
  // selectedRoute?: Route;

  // onSelect(rt: Route): void {
  //   this.selectedRoute = rt;
  //   // to have an history of clicked item
  //   this.messageService.add(`Route: Selected route name=${rt.name}`);
  // }


  constructor(private routeService: RouteService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getRoutes()
  }

// wait for the server for setting the component
  getRoutes(): void {
    this.routeService.getRoutes()
      .subscribe((routes:Route[]) => {this.routes = routes});
  }

  introText = "Here we have list of routes served by light and heavy rails trains"
  // addRouteTitle = "Add a route amnually";
}
