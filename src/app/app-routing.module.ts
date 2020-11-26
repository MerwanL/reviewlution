import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { OriginComponent } from "./origin/origin.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "origine",
    component: OriginComponent,
    pathMatch: "full",
  },
  {
    path: "produits",
    component: ProductComponent,
    pathMatch: "full",
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
