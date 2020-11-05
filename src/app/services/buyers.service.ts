import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BuyerCreateModule } from '../models/buyer/buyer-create.module';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private url = 'http://localhost:8000/api/';
  private apikey = '';
  private typeToken = 'Bearer';

  constructor( private http: HttpClient ){

  }

  getQuery( query: string): any {

    const urlQuery = `${this.url}${ query }`;

    return this.http.get(urlQuery);
  }

  postQuery( query: string, data: any): any {

    const urlQuery = `${this.url}${ query }`;
    const headers = new HttpHeaders ({
      Accept: 'application/json'});

    return this.http.post(urlQuery, data, {headers});
    }

  deleteQuery( query: string, id: number ): any{
    const urlQuery = `${this.url}${ query }/${id}`;
    console.log(urlQuery);

    return this.http.delete(urlQuery);
  }

  create( buyer: BuyerCreateModule): any{
    const sendData = {
      name: buyer.name,
      document: buyer.document,
      email: buyer.email,
    };

    return this.postQuery('buyers', sendData);
    }

    index(): any{
      return this.getQuery('buyers');
    }

    delete( id: number ): any{
      return this.deleteQuery('buyers', id);
    }

    assignament(branchOfficeId: number, quantityTickets: number, buyerId: number): any{
      const data = {
        branch_office_id: branchOfficeId,
        quantity_tickets: quantityTickets,
      };
      console.log(data);

      return this.postQuery( `buyers/assignament/${buyerId}`, data );
    }

  }
