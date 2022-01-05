import { AvatarComponent } from "./avatar.component";
import { byRole, createComponentFactory, Spectator } from "@ngneat/spectator";

describe("AvatarComponent", () => {
  let app: Spectator<AvatarComponent>;
  const createComponent = createComponentFactory({
    component: AvatarComponent,
  });

  beforeEach(() => {
    app = createComponent();
  });

  it("should display avatar", () => {
    expect(app.component).toBeTruthy();
  });

  it("should display white color when no id is provided", () => {
    const avatar = app.query(byRole("img"));
    // TODO remove this hack when spectator implement toHaveStyle matcher
    // @ts-ignore style is possible unknown
    expect(avatar?.style._values).toEqual({
      "background-color": "rgb(255, 255, 255)",
    });
  });
});
