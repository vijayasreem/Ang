import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-github',
  templateUrl: './configure-github.component.html',
  styleUrls: ['./configure-github.component.css']
})
export class ConfigureGithubComponent implements OnInit {
  configureGithubForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.configureGithubForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      url: [null, Validators.required],
      repository: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.configureGithubForm.value);
  }
}