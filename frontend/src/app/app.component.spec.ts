import { AppComponent } from "./app.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("AppComponent", () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should display AppComponent", () => {
    expect(spectator.component).toBeTruthy();
  });
});
