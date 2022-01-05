import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendMessageComponent implements OnInit {
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  public messageText = "";
  constructor() {}
  @HostListener("window:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  }

  ngOnInit(): void {}

  public sendMessage(): void {
    if (this.messageText) {
      this.send.emit(this.messageText);
      this.messageText = "";
    }
  }
}
