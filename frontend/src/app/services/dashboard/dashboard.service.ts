import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllStudentAppointments():Observable<any> {
    let tutor_id = 101;
    let formData = new FormData();
    formData.append("tutor_id","100");

    const localUrl = "http://169.234.110.139:5000/students";
    return this.http.post(localUrl, formData);
      // .pipe(catchError(this.errorHandler));
  }

  
  getTutorAppointments():Observable<any> {
    let tutor_id = 101;
    let formData = new FormData();
    formData.append("student_id","103");

    const localUrl = "http://169.234.110.139:5000/tutors";
    return this.http.post(localUrl, formData);
  }

  sendAppointmentStatus(transaction_id:string,status:string){
    const localUrl = "http://169.234.110.139:5000/ChangeTransactionStatus";
    let formData = new FormData();
    formData.append("transaction_id",transaction_id);
    formData.append("status",status);
    return this.http.post(localUrl,formData);
  }
 
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  


}