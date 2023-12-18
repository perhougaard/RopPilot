import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { OpstillingComponent } from './components/opstilling/opstilling.component';
import { PriskurantComponent } from './components/priskurant/priskurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RegnskabComponent } from './components/regnskab/regnskab.component';
import RegnskabsummerComponent from './components/regnskabsummer/regnskabsummer.component';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GlobalErrorHandler } from './utils/global.error.handler';

@NgModule({
  declarations: [
    AppComponent,
    PriskurantComponent,
    RegnskabComponent,
    RegnskabsummerComponent,
    OpstillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: OpstillingComponent },
      { path: 'opstilling', component: OpstillingComponent }
    ]),
    TreeListModule,
    LayoutModule
    
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
