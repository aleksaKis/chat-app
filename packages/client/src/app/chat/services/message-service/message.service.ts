import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { io, Socket } from "socket.io-client";
import { IMessage } from "../../models/message.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take } from "rxjs/operators";
import { getRandomHex } from "../../utils/utils";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  public messages$: BehaviorSubject<IMessage[]> = new BehaviorSubject<
    IMessage[]
  >([]);

  private readonly _LOCAL_ADDRESS = "0.0.0.0";
  private readonly _PORT = 3000;
  private readonly SIZE = 20;

  private readonly id = getRandomHex();

  private socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io(`${this._LOCAL_ADDRESS}:${this._PORT}`);
  }

  public getAllMessages(): void {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http
      .get<IMessage[]>(
        `http://${this._LOCAL_ADDRESS}:${this._PORT}/messages?size=${this.SIZE}`,
        {
          headers,
        }
      )
      .pipe(take(1))
      .subscribe((messages: IMessage[]) => {
        if (messages && messages.length) {
          this.spreadMessage(messages);
        }
      });
  }

  private spreadMessage(messages: IMessage[]) {
    const _messages = messages.map((message) =>
      this.convertToMessageType(message)
    );
    this.messages$.next(_messages);
  }

  public sendMessage(message: string): void {
    const time = new Date().toISOString();
    this.socket.emit("message", { message, id: this.id, time });
  }

  private convertToMessageType(message: IMessage): IMessage {
    const isMine = this.id === message.id;
    return { isMine, ...message };
  }

  public subscribeToNewMessages(): void {
    this.socket.on("message", (response: IMessage) => {
      this.receiveMessage(this.convertToMessageType(response));
    });
  }

  private receiveMessage(message: IMessage): void {
    this.messages$.next([...this.messages$.getValue(), message]);
  }
}
