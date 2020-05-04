import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormCreateComponent } from "./form/form-create/form-create.component";
import { HeaderComponent } from "./header/header.component";
import { FormDisplayComponent } from "./form/form-display/form-display.component";

@NgModule({
  declarations: [
    AppComponent,
    FormCreateComponent,
    HeaderComponent,
    FormDisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
