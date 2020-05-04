import { Component, OnInit, OnDestroy } from "@angular/core";
import { Form } from "../form.model";
import { FormService } from "../form.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form-display",
  templateUrl: "./form-display.component.html",
  styleUrls: ["./form-display.component.css"],
})
export class FormDisplayComponent implements OnInit, OnDestroy {
  forms: Form[] = [];
  isLoading = false;
  private formsSub: Subscription;
  constructor(public formService: FormService) {}
  ngOnInit() {
    this.isLoading = true;

    this.formService.getForms();
    this.formsSub = this.formService
      .getFormUpdateListener()
      .subscribe((forms: Form[]) => {
        this.isLoading = false;
        this.forms = forms;
      });
  }
  ngOnDestroy() {
    this.formsSub.unsubscribe();
  }

  onDelete(formId: string) {
    this.formService.deleteForm(formId);
  }
}
