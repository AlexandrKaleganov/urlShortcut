import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AdminModule} from './admin/admin.module';
import { HttpClientModule} from '@angular/common/http';
import { AuthorityDirective } from './shared/directive/authority.directive';
import {EntitiesModule} from './entities/entities.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        EntitiesModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule, AdminModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
