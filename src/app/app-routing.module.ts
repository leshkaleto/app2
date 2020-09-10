import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {APP_BASE_HREF} from "@angular/common";
import {SubComponent} from "./sub/sub.component";

const routes: Routes = [
  {path: 'app2/sub', component: SubComponent},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
}
