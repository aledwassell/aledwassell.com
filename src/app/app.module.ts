import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {AppRoutingModule} from './app-routing.module';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AngularFireModule } from '@angular/fire/compat';
import { ResumeComponent } from './components/resume/resume.component';
import { SafePipe } from './pipes/safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        MainComponent,
        ResumeComponent,
        SafePipe,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
