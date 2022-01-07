import { MatIconModule } from "@angular/material/icon";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

import { FloatHeaderComponent } from "./float-header.component";

describe("FloatHeaderComponent", () => {
  let spectator: Spectator<FloatHeaderComponent>;
  const createComponent = createComponentFactory({
    component: FloatHeaderComponent,
    imports: [MatIconModule],
  });

  it("should create FloatHeaderComponent", () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
