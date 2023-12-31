import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityURL:string = "http://localhost:3000/activities";
  constructor(private httpClient:HttpClient){}

  getActivities():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(this.activityURL);
  }

  getActivityById(id:number):Observable<Activity>{
    return this.httpClient.get<Activity>(`${this.activityURL}/${id}`)
  }

  saveActivity(activity:Activity){
    return this.httpClient.post<Activity>(`${this.activityURL}`,activity);
  }
  updateActivity(activityID:number,activity:Activity):Observable<Activity>{
    return this.httpClient.put<Activity>(`${this.activityURL}/${activityID}`,activity);
  }
  deleteActivity(activityID:number):Observable<Activity>{
    return this.httpClient.delete<Activity>(`${this.activityURL}/${activityID}`);
  }

  
}
