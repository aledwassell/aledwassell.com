import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from './_components/main/main.component';
import {ResumeComponent} from './_components/resume/resume.component';


const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                /*enableTracing: true,*/
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
