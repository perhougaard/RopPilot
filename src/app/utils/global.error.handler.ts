import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
    public handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(() => errorMessage);
    }
}