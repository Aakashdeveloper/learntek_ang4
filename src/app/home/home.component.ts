import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages =['English','Spanish','Other'];
  model=new Employee('', 'Bajpai',true,"male","default");
  hasPrimaryLanguageError=false;

  constructor(private formPoster: FormPoster){

  }

  submitForm(form : NgForm){
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data=> console.log('success:', data),
        err => console.log('error: ',err)
      )
    console.log(this.model);
  }

  validateLang(event){
    console.log('lang: '+this.model.codeLanguage)
    if(this.model.codeLanguage === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
  /*firstNameToUpperCase(value: string){
    if(value.length > 0)
      this.model.firstName= value.charAt(0).toUpperCase()+ value.slice(1);
    else
      this.model.firstName = value;
  }*/
}
