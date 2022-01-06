import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from "@angular/core";
import { IMessage } from "../../models/message.model";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent implements AfterViewInit {
  @Input() message: IMessage | undefined;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }
}
