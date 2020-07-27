import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { IAngularMyDpOptions, AngularMyDatePickerDirective } from 'angular-mydatepicker';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  disableCreateButton: any = false;
  public myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'yyyy-mm-dd'
  };
  @ViewChild('dp') myDp: AngularMyDatePickerDirective;

  roles: any = [];
  fields: any = [];
  adminFields = [
    {
      label: 'Role',
      type: 'select',
      name: "role_id",
      value: "1",
      roles: [],
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "role Required"
      }]
    },
    {
      label: 'Name',
      type: 'text',
      fieldType: 'text',
      name: "name",
      placeholder: "name",
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Name Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/),
        message: "Name should not started with space"
      }]
    },
    {
      label: 'Email Address',
      type: 'text',
      name: "email",
      fieldType: 'text',
      placeholder: "email address",
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "email Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        message: "Invalid email address"
      }]
    },
    {
      label: 'Mobile Number',
      type: 'text',
      name: "mobile_no",
      placeholder: "mobile number",
      fieldType: 'text',
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "number Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^[0-9]*$/),
        message: "Mobile number accepts only numbers"
      }]
    },
    {
      label: 'Password',
      type: 'text',
      name: "password",
      fieldType: 'password',
      placeholder: "password",
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Password Required"
      },
      {
        name: "minlength",
        validator: Validators.minLength(8),
        message: "Minimum length must be 8"
      }]
    }
  ];
  storeManagerFields = [
    {
      label: 'Role',
      type: 'select',
      name: "role_id",
      value: "1",
      roles: [],
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "role Required"
      }]
    },
    {
      label: 'Name',
      type: 'text',
      name: "name",
      value: null,
      placeholder: 'name',
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Name Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/),
        message: "Name should not started with space"
      }]
    },
    {
      label: 'Email Address',
      type: 'text',
      name: "email",
      value: null,
      placeholder: 'email address',
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "email Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        message: "Invalid email address"
      }]
    },
    {
      label: 'Mobile Number',
      type: 'text',
      name: "mobile_no",
      value: null,
      placeholder: 'mobile number',
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "number Required"
      },
      {
        name: "pattern",
        validator: Validators.pattern(/^[0-9]*$/),
        message: "mobile number accepts only numbers"
      }]
    },
    {
      label: 'Date of Birth',
      type: 'dob',
      name: "birth_date",
      value: null,
      placeholder: 'date of birth',
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "DOB Required"
      }]
    },
    {
      label: 'Gender',
      type: 'select',
      name: "gender",
      roles: [{id: 'Male', name: 'Male'}, {id: 'Female', name: 'Female'}],
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Gender Required"
      }]
    },
    {
      label: 'Password',
      type: 'text',
      name: "password",
      fieldType: 'password',
      placeholder: "password",
      value: null,
      validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Password Required"
      },
      {
        name: "minlength",
        validator: Validators.minLength(8),
        message: "Minimum length must be 8"
      }]
    }
  ];

  constructor(public fb: FormBuilder,
    public dataService: DataService, private tostr: ToastrService,
    private router: Router,
    private cdr: ChangeDetectorRef
    ) {
      this.fields = this.adminFields;
      this.userForm = this.createControl(this.adminFields);
  }

  ngOnInit() {
    this.getRoles();
  }

  toggleCalendar(): void {
    this.cdr.detectChanges();
    this.myDp.toggleCalendar();
  }

  createControl(fieldArray) {
    const group = this.fb.group({});
    fieldArray.forEach(field => {
    const control = this.fb.control(
    field.value,
    this.bindValidations(field.validations || [])
    );
    group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
    const validList = [];
    validations.forEach(valid => {
    validList.push(valid.validator);
    });
    return Validators.compose(validList);
    }
    return null;
  }

  changeRole(id) {
    console.log('id ==>>', id)
    switch(id) {
      case "1" : console.log('admin');
        this.fields = this.adminFields;
        this.setRolesInFieldsArray(this.roles, '1');
        this.userForm = this.createControl(this.adminFields);
        break;
      case "2" : console.log('worker');
        break;
      case "3" : console.log("store manager");
        this.fields = this.storeManagerFields;
        this.setRolesInFieldsArray(this.roles, '3');
        this.userForm = this.createControl(this.storeManagerFields);
        break;
    }
  }

  getRoles() {
    this.tostr.info("Fetching Roles", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getRoles().subscribe(res => {
      this.roles = res.data;
      this.setRolesInFieldsArray(this.roles, '1');
      console.log("this is the data of the roles -=-=-=-=", this.roles)
    })
  }

  setRolesInFieldsArray(roles, value) {
    const index = this.fields.findIndex(x => x.name === "role_id");
    console.log('role_id index ==', index)
    this.fields[index]['roles'] = roles;
    this.fields[index]['value'] = value;
    console.log('this.fields ==>>', this.fields)
  }

  ngOnDestroy() {
  }

  addUser() {
    console.log('this.userForm.value ====>>>]]]]', this.userForm.value);
    if (this.userForm.invalid) {
      return;
    }
    // return;
    if (this.userForm.value.role_id === "1") {
      this.addAdmin();
    } else if (this.userForm.value.role_id === "3") {
      this.addStoreManager();
    }

  }

  addAdmin() {
    this.dataService.addUser(this.userForm.value).subscribe(res => {
      if (res.success != "1") {
        this.tostr.warning(res.message);
      }
      else {
        this.tostr.success(res.message);
        this.userForm.reset();
      }
    });
  }

  addStoreManager() {
    this.disableCreateButton = true;
    var apireq = new FormData();
    apireq.append('name', this.userForm.value['name']);
    apireq.append('mobile_no', this.userForm.value['mobile_no']);
    apireq.append('email', this.userForm.value['email']);
    apireq.append('dob', (this.userForm.value['birth_date'].singleDate.formatted));
    apireq.append('gender', this.userForm.value['gender']);
    apireq.append('password', this.userForm.value['password']);
    apireq.append('employee_id', localStorage.getItem('id'));
    this.dataService.addStoreManager(apireq).subscribe(res => {
      this.disableCreateButton = false;
      console.log('res ==>>', res);
      if (res.success === 1) {
        this.router.navigate(['/list-users']);
      } else {
        this.tostr.info(res.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      }
    }, error => {
      this.disableCreateButton = false;
      console.log('error ===>>', error);
      this.tostr.info(error.error.error, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    })
  }
}
