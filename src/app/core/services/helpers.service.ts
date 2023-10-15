import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    public toastr: ToastrService,
  ) { }

  // cek error form
  hasError(form: FormGroup, control: string, error: string): boolean {
    return (
      (form.get(control)?.invalid &&
        (form.get(control)?.dirty || form.get(control)?.touched) &&
        form.get(control)?.hasError(error)) ||
      false
    );
  }

  // alert success
  alertSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  // alert warning
  alertWarning(message: string) {
    this.toastr.warning(message, 'Warning');
  }

  // alert error
  alertError(message: string) {
    this.toastr.error(message, 'Error');
  }


}
