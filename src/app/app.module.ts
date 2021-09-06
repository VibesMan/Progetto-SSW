import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostwebService } from './postweb.service';
import { HttpClientModule } from '@angular/common/http';
import { PostitViewerComponent } from './postit-viewer/postit-viewer.component';
import { PostitCreatorComponent } from './postit-creator/postit-creator.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PostitViewerComponent, PostitCreatorComponent],
  providers: [PostwebService],
  bootstrap: [AppComponent]
})
export class AppModule {}
