import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { SearchComponent } from './search/search.component';
import { TopNavBarComponentComponent } from './top-nav-bar-component/top-nav-bar-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentDetailComponent,
    SearchComponent,
    TopNavBarComponentComponent,
    PageNotFoundComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
