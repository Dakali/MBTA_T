//angular module's
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//components
import {RoutesComponent} from "./components/routes/routes.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RouteDetailComponent} from "./components/route-detail/route-detail.component";

//array of "routes"
const rts: Routes = [
  {path: 'routes', component: RoutesComponent},
  // adding path of dashboard routes
  {path: 'dashboard', component: DashboardComponent},
  // for making the app navigate to the dashboard automatically
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //for open a detailled view of a routes !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! add id when fetch data from api
  {path: 'detail/:name', component: RouteDetailComponent},
];

// "routes" configuration
@NgModule({
  imports: [RouterModule.forRoot(rts)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
