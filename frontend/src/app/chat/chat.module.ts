import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { MessageComponent } from "./components/message/message.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SendMessageComponent } from "./components/send-message/send-message.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    SendMessageComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [ChatComponent, MessageComponent],
  providers: [],
})
export class ChatModule {}
