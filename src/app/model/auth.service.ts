import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDatasourceService } from "./rest.datasource.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(private dataSource: RestDatasourceService) {
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.dataSource.auth_token !== null && this.dataSource.auth_token !== undefined;
  }

  clear() {
    this.dataSource.auth_token = undefined;
  }
}
