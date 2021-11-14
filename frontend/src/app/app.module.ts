import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./chat/components/message/message.component";
import { ChatModule } from "./chat/chat.module";

@NgModule({
  declarations: [AppComponent],
  imports: [ChatModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
