import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { FormService } from "../form.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Form } from "../form.model";

@Component({
  selector: "app-form-create",
  templateUrl: "./form-create.component.html",
  styleUrls: ["./form-create.component.css"],
})
export class FormCreateComponent implements OnInit {
  information = [
    { name: "firstName", placeHolder: "First Name", type: "text" },
    { name: "lastName", placeHolder: "Last Name", type: "text" },
    { name: "street", placeHolder: "Street", type: "text" },
    { name: "city", placeHolder: "City", type: "text" },
    { name: "state", placeHolder: "State", type: "text" },
    { name: "zip", placeHolder: "Zip", type: "text" },
    { name: "tel", placeHolder: "Telephone", type: "number" },
    { name: "email", placeHolder: "Email", type: "email" },
    { name: "dateOfBirth", placeHolder: "Date of Birst", type: "date" },
  ];
  likes = [
    { name: "student" },
    { name: "location" },
    { name: "campus" },
    { name: "atmosphere" },
    { name: "dormroom" },
    { name: "sports" },
  ];

  intrested = [
    { name: "friend" },
    { name: "television" },
    { name: "internet" },
    { name: "other" },
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;

    const thisForm = {
      id: null,
      suggest: form.value.suggest,
      content: form.value.content,
      raffle: form.value.raffle,

      intrested: form.value.intrested,

      firstName: form.value.firstName,
      lastName: form.value.lastName,
      dateOfBirth: form.value.dateOfBirth,
      street: form.value.street,
      city: form.value.city,
      state: form.value.state,
      zip: form.value.zip,
      tel: form.value.tel,
      email: form.value.email,
      student: form.value.student || false,
      location: form.value.location || false,
      campus: form.value.campus || false,
      atmosphere: form.value.atmosphere || false,
      dormroom: form.value.dormroom || false,
      sports: form.value.sports || false,
    };
    if (this.mode === "create") {
      this.formService.addForm(thisForm);
    } else {
      this.formService.updateForm(this.formId, thisForm);
    }
    form.resetForm();
  }
  mode = "create";
  private formId: string;
  form: Form;
  isLoading = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.formId = paramMap.get("postId");
        this.isLoading = true;

        this.formService.getForm(this.formId).subscribe((formData) => {
          this.isLoading = false;

          this.form = formData;
          console.log(formData);
        });
      } else {
        this.mode = "create";
        this.formId = null;
      }
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }
}
