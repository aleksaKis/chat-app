import { ChatComponent } from "./chat.component";
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from "@ngneat/spectator";
import { MessageComponent } from "./components/message/message.component";
import { SendMessageComponent } from "./components/send-message/send-message.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "./services/message-service/message.service";
import { Subject } from "rxjs";

describe("ChatComponent", () => {
  let spectator: Spectator<ChatComponent>;
  const createComponent = createComponentFactory({
    declarations: [MessageComponent, SendMessageComponent, AvatarComponent],
    imports: [FormsModule, ReactiveFormsModule],
    component: ChatComponent,
    providers: [mockProvider(MessageService, { message$: new Subject() })],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it("should display ChatComponent", () => {
    expect(spectator.component).toBeTruthy();
  });
});
