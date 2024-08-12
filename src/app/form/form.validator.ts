import { AbstractControl } from '@angular/forms';

export const PasswordValidator = (control: AbstractControl) => {
  let passwordRegEx = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (!passwordRegEx.test(control.value)) {
    return { invalidPassword: true };
  }
  return null;
};

export const ConfirmPasswordValidator = (password:string) => {
  return (control:AbstractControl) => {
    if(password != control.value){
      return {invalidConfirmPassword: true}
    }
    return null
  }
}