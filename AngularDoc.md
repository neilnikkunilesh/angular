*********************************************
#############################################
*********************************************
>>> npm install -g @angular/cli@latest (To upgrade)


#####Run the Angular Project:
	ng serve --open
### if you don't want to run project on port 4200 use following command:
	ng serve --open 5100

ng g module app-routing


For Killing the taks that running on specific port no:

netstat -aon | find "8080"

taskkill /F /PID 2222

In Angular Create New Componenet
#$ ng g c componentName --skipTest true instead of "--spec false"

### We have two approch for creating a form:
	1.	Reactive forms
	2.	Template-driven forms
	

## Common form foundation classes:

Both reactive and template-driven froms are build on following bases classes:
	> FormControl: track the value and validation status of an individual form control.
	> FormGroup: tracks the same values and status for a collection of form control.
	> FormArray: tracks the same values and status for a array of form control.
	> ControlValueAccesssor: creates a bridge between Angular Form Control instance and native DOM elements.
	
### Data flow in forms

When a application contains a form, Angular must keep the view in sync with the component model and the component model in sync with the view.
As users change values and make selections through the view, the new values must be reflected in the data model. Similarly, 
when the program logic changes values in the data model, those values must be reflected in the view.


https://angular.io/guide/forms-overview
https://angular.io/guide/reactive-forms


form = this.fb.group({
    password: [
        <form initial value>, 
        [ ... array of synchronous validators ...]
    ]
 });

form = this.fb.group({
      password: [
          '', 
          [Validators.required, Validators.minLength(8),
           createPasswordStrengthValidator()
          ]
      ]
   });



Although this syntax is compact, it might become a bit difficult to read for fields with a larger number of validators.

An alternative syntax is the one used by the email field:

 form = this.fb.group({
    email: ['', {
        validators: [ ... array of synchronous validators ...],
        asyncValidators: [ ... array of asynchronous validators ...]
        updateOn:  'change' or 'blur' or 'submit'
    }],
    ...
 });
 

** To access a FormControl in a FormGroup
employeeForm.controls.fullName.value
				or
employeeForm.get('fullName').value;


################################################################################
################		**The FormBuilder class has 3 methods	**	################
################################################################################

1.control()
2.group()
3.array()

>>>>> Below Example using Form Group

this.employeeForm = new FormGroup({
	fullName: new FormControl(),
	email: new FormControl(),
	skills: new FromGroup({
		skillName: new FormControl(),
		experienceInYear: new FormControl(),
		proficiency: new FormControl(),
	}),
})

>>>>> Using FormBuilder

this.employeeForm = this.fb.group({
	fullName: [''],
	email: [''],
	skills: this.fb.group({
		skillName: [''],
		experienceInYear: [''],
		proficiency: ['']
	})
	
})


################################################################################
################		**Angular Form Control ValueChanges**		################
################################################################################
								AbstractControl     <-------- valueChanges Observable
					|-----------'			'---------|
				FromGroup						FromControl
					
					
// subscribing to valueChanges observable
this.employeeForm.get('fullName').valueChanges.subscribe(
	value => {
		console.log(value);
	}
);

################################################################################
#### Loop through all Form Controls in Form Group in a Reactive Form		####
################################################################################

Loop through all form controls in a form group inclding nested form group
> Reset form controls
> Enable or disable all form controls
> Set and clear validators
> Mark form controls as dirty, touched, etc.
> Move validation to the component class.
