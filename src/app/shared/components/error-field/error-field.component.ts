import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';
import { ValidationPipe } from 'shared/pipe/validation.pipe';

@Component({
  selector: 'app-error-field',
  standalone: true,
  imports: [ValidationPipe, JsonPipe],
  templateUrl: './error-field.component.html',
  styleUrl: './error-field.component.scss'
})
export class ErrorFieldComponent {

  @Input() control!: FormControl | AbstractControl;

  @Input() errorMessages!: object;


  constructor(public formDirective: FormGroupDirective) { }
  ngOnInit(): void {

  }


}
