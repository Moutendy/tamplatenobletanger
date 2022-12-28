import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HomeComponentComponent } from './views/pages/home-component/home-component.component';
import { UsersComponent } from './views/pages/users/users.component';
import { AppartementComponent } from './views/pages/appartement/appartement.component';
import { AjouterpostComponent } from './views/pages/ajouterpost/ajouterpost.component';
import { AjouterappartementComponent } from './views/pages/ajouterappartement/ajouterappartement.component';
import { UpdatepostComponent } from './views/pages/ajouterpost/updatepost/updatepost.component';
import { UpdateappartementComponent } from './views/pages/ajouterappartement/updateappartement/updateappartement.component';
import { ImageComponent } from './views/pages/ajouterappartement/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponentComponent,
    UsersComponent,
    AppartementComponent,
    AjouterpostComponent,
    AjouterappartementComponent,
    UpdatepostComponent,
    UpdateappartementComponent,
    ImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
