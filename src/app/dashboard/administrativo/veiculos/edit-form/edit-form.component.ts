import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Veiculo } from '@app/models/interfaces/plataforma';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  veiculo: Veiculo;
  status: boolean = false;

  formVeiculo = this.fb.group({
    name: ['', [Validators.required]],
    model: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    contact: ['', [Validators.required]],
    uniqueId: ['', [Validators.required]],
    expirationTime: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    if(this.veiculo != null) {
      this.status = true;
      this.formVeiculo.patchValue(this.veiculo);
    }
  }

  onSubmit() {
    if(this.formVeiculo.valid) {
      // ENVIAR PARA O SERVIDOR
      console.log(this.formVeiculo.value);
    }
  }

}
