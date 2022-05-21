import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {AppRoutingModule} from './app-routing.module';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeComponent } from './components/resume/resume.component';
import { SafePipe } from './pipes/safe.pipe';
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
        AppRoutingModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
