import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '@app/models/interfaces/plataforma';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  usuario: Usuario;
  status: boolean = false;

  formUsuario = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    admin: ['', [Validators.required]],
    expirationTime: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    if(this.usuario != null) {
      this.status = true;
      console.log(this.usuario);
      this.formUsuario.patchValue(this.usuario);
    }
  }

  onSubmit() {
    if(this.formUsuario.valid) {
      // ENVIAR PARA O SERVIDOR
      console.log(this.formUsuario.value);
    }
  }

}
