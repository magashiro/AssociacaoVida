this.dadosAnimal = formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
});

this.username = this.dadosAnimal.controls['username'];
this.password = this.dadosAnimal.controls['password'];