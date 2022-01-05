import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { MessageService } from "./services/message-service/message.service";
import { Observable, Subject } from "rxjs";
import { IMessage } from "./models/message.model";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit, OnDestroy {
  public messageList$: Observable<IMessage[]> = this.messageService.messages$;
  private ngUnsubscribe = new Subject();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getAllMessages();
    this.messageService.subscribeToNewMessages();
  }

  public sendMessage(message: string): void {
    this.messageService.sendMessage(message);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(false);
    this.ngUnsubscribe.complete();
  }
}
