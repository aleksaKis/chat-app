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
import { MatIconModule } from "@angular/material/icon";
import { FloatHeaderComponent } from './components/float-header/float-header.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    SendMessageComponent,
    AvatarComponent,
    FloatHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ChatComponent, MessageComponent],
  providers: [],
})
export class ChatModule {}
