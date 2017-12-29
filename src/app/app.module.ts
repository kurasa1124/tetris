import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { game } from './component/game.component/game.component';
import { score } from './component/score.component/score.component';


@NgModule({
  declarations: [
    AppComponent,
    game,
    score
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
