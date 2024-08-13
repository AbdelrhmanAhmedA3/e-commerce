import { FormControl, FormGroup } from "@angular/forms"

export type authForm = FormGroup<{
    username: FormControl<string>
    password: FormControl<string>
}>