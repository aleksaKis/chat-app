import { createServiceFactory, SpectatorService } from "@ngneat/spectator";
import { MessageService } from "./message.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

jest.mock("socket.io-client");

describe("MessageService", () => {
  let spectator: SpectatorService<MessageService>;
  const createService = createServiceFactory({
    service: MessageService,
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it("should create service", () => {
    expect(spectator.service).toBeTruthy();
  });
});
