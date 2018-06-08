import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  private API_URL = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  // try
  getOneTry(id) {
    return this.http.get(`${this.API_URL}/try/${id}`);
  }

  getTry() {
    return this.http.get(`${this.API_URL}/try`);
  }

  putTry(data) {
    return this.http.put(`${this.API_URL}/try/${data.id}`, data);
  }

  // chapter
  updateOneChapter(chapter) {
    return this.http.put(`${this.API_URL}/chapter/${chapter.id}`, chapter);
  }
}
