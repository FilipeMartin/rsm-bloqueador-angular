import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario, Veiculo, Posicao, Evento} from './../models/interfaces/plataforma';


@Injectable({
  providedIn: "root"
})
export class PlataformaService {

  constructor(
    private http: HttpClient, 
    protected router: Router
    ) {
  }

  async getClientes(){
    return await this.http.get<Array<Usuario>>(`users`, { withCredentials: true }).toPromise();
  }

  async getVeiculos(){
    return await this.http.get<Array<Veiculo>>(`devices`, { withCredentials: true }).toPromise();
  }

  async getPosicoes(){
    return await this.http.get<Array<Posicao>>(`positions`, { withCredentials: true }).toPromise();
  }

  async getEventos(){
    return await this.http.get<Array<Evento>>(`server`, { withCredentials: true }).toPromise();
  }

}

