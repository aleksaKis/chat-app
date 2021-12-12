import { MessageComponent } from "./message.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { AvatarComponent } from "../avatar/avatar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Mocking element ref
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("MessageComponent", () => {
  let spectator: Spectator<MessageComponent>;
  const createComponent = createComponentFactory({
    declarations: [AvatarComponent],
    component: MessageComponent,
    imports: [FormsModule, ReactiveFormsModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should display MessageComponent", () => {
    expect(spectator.component).toBeTruthy();
  });
});
