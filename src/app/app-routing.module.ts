import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormCreateComponent } from "./form/form-create/form-create.component";
import { FormDisplayComponent } from "./form/form-display/form-display.component";

const routes: Routes = [
  { path: "", component: FormDisplayComponent },
  { path: "create", component: FormCreateComponent },
  { path: "edit/:postId", component: FormCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
