import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  @Input() id: string | undefined;
  public hexColor = "#fff";

  constructor() {}

  ngOnInit(): void {
    if (this.id) {
      // @ts-ignore Expected 0 arguments, but got 1
      this.hexColor = `#${this.id.toString(16)}`;
    }
  }
}
