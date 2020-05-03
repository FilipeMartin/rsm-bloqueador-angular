import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, interval, Subject} from "rxjs";
import {environment} from "../../environments/environment";

export interface Notificacao {
  userId: string;
  documentoId: number;
  documento: string;
  codigo: string;
  createdAt: Date;
  readedAt?: Date;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  protected $update: BehaviorSubject<Array<Notificacao>> = new BehaviorSubject<Array<Notificacao>>([]);
  notificacoesRecebidas = this.$update.asObservable();

  constructor(protected http: HttpClient) {
    this.setup().then();
  }

  async setup() {
    await this.getNotificacoesNaoLidas();
    interval(environment.notificationInterval * 60000).subscribe(async i => {
      await this.getNotificacoesNaoLidas();
    });
  }

  async getNotificacoesNaoLidas() {
    const notifications = await this.$getNotificacoesNaoLidas();
    this.$update.next(notifications);
  }

  protected $getNotificacoesNaoLidas() {
    return this.http.get<Array<any>>("Users/Notificacoes").toPromise();

  }

  notificacaoLida(id: number) {
    return this.http.put(`Users/Notificacoes/${id}`, {}).toPromise();
  }

  notificacoesLidas(ids: Array<number>) {
    return this.http.put(`Users/Notificacoes/`, ids).toPromise();
  }
}
