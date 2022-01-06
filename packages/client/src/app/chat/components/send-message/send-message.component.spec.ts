import { SendMessageComponent } from "./send-message.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

describe("SendMessageComponent", () => {
  let spectator: Spectator<SendMessageComponent>;
  const createComponent = createComponentFactory({
    component: SendMessageComponent,
    imports: [ReactiveFormsModule, FormsModule, MatButtonModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should display SendMessageComponent", () => {});
});
