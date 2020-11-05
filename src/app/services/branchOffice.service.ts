import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BranchOfficeCreateModule } from '../models/BranchOffice/branchOffice-create.module';



@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

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

    return this.http.delete(urlQuery);
  }

  create( branchOffice: BranchOfficeCreateModule): any{
    return this.postQuery('branchOffice', branchOffice);
    }

    index(): any{
      return this.getQuery('branchOffice');
    }

    delete( id: number ): any{
      return this.deleteQuery('branchOffice', id);
    }

  }
