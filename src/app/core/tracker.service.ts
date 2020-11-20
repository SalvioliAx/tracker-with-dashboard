import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../shared/models/track';

const url = 'http://localhost:3000/track/';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private http: HttpClient) { }

  save(track: Track): Observable<Track> {
    return this.http.post<Track>(url, track);
  }

  edit(track: Track): Observable<Track> {
    return this.http.put<Track>(url + track.id, track);
  }

  list(): Observable<Track[]> {
    return this.http.get<Track[]>(url);
  }

  view(id: number): Observable<Track> {
    return this.http.get<Track>(url + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }

}


