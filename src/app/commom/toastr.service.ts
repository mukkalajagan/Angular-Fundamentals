import { Injectable } from "@angular/core";
declare let toastr;
@Injectable()
export class ToastrService {
  success(message: any, title?: any) {
    toastr.success(message, title);
  }
  info(message: any, title?: any) {
    toastr.info(message, title);
  }
  warning(message: any, title?: any) {
    toastr.warning(message, title);
  }
  error(message: any, title?: any) {
    toastr.error(message, title);
  }
}
