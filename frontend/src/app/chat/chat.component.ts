import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { MessageService } from "./services/message-service/message.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { IMessage } from "./models/message.model";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit, OnDestroy {
  public messageList: IMessage[] = [];

  private ngUnsubscribe = new Subject();

  constructor(
    private messageService: MessageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getNewMessages();
  }
  public sendMessage(message: string) {
    this.messageService.sendMessage(message);
  }

  private getNewMessages(): void {
    this.messageService.message$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((message) => {
        if (message) {
          this.messageList = [...this.messageList, message];
          this.cd.markForCheck();
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(false);
    this.ngUnsubscribe.complete();
  }
}
