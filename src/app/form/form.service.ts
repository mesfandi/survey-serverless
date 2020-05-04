import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Form } from "./form.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class FormService {
  private forms: Form[] = [];
  private formUpdated = new Subject<Form[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getFormUpdateListener() {
    return this.formUpdated.asObservable();
  }

  getForms() {
    return this.http
      .get<{ message: string; posts: any }>(
        "https://wltioe4b5e.execute-api.us-east-1.amazonaws.com/dev/api/posts"
      )

      .subscribe((transformedPosts) => {
        console.log(transformedPosts.posts);
        this.forms = transformedPosts.posts;
        this.formUpdated.next([...this.forms]);
      });
  }

  getForm(id: string) {
    return this.http.get<Form>(
      "https://wltioe4b5e.execute-api.us-east-1.amazonaws.com/dev/api/posts/" +
        id
    );
  }

  addForm(form: Form) {
    this.http
      .post<{ message: string; postId: string }>(
        "https://wltioe4b5e.execute-api.us-east-1.amazonaws.com/dev/api/posts",
        form
      )
      .subscribe((responseData) => {
        const id = responseData.postId;
        this.forms.push(form);
        this.formUpdated.next([...this.forms]);
        this.router.navigate(["/"]);
      });
  }
  updateForm(id: string, form: Form) {
    this.http
      .put(
        "https://wltioe4b5e.execute-api.us-east-1.amazonaws.com/dev/api/posts/" +
          id,
        form
      )
      .subscribe((reaponse) => {
        const updatedForms = [...this.forms];
        console.log(reaponse);
        const oldFormIndex = updatedForms.findIndex((f) => f.id !== id);
        updatedForms[oldFormIndex] = form;
        this.forms = updatedForms;
        this.formUpdated.next([...this.forms]);
        this.router.navigate(["/"]);
      });
  }
  deleteForm(id: string) {
    this.http
      .delete(
        "https://wltioe4b5e.execute-api.us-east-1.amazonaws.com/dev/api/posts/" +
          id
      )
      .subscribe((params) => {
        const updatedForms = this.forms.filter((post) => post.id !== id);
        this.forms = updatedForms;
        this.formUpdated.next([...this.forms]);
      });
  }
}
