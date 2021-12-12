import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { io, Socket } from "socket.io-client";
import { IMessage } from "../../models/message.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MessageService implements OnInit {
  public message$: Subject<IMessage> = new Subject();

  private readonly _LOCAL_ADDRESS = "0.0.0.0";
  private readonly _PORT = 3000;
  private readonly SIZE = 20;

  // Todo secure id generator with id service using crypto
  private readonly id = Math.floor(Math.random() * 16777215).toString();

  public socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io(`${this._LOCAL_ADDRESS}:${this._PORT}`);
  }

  ngOnInit(): void {
    this.getAllMessages();
    this.getNewMessage();
  }

  // todo make store;
  private getAllMessages(): void {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    this.http
      .get(
        `http://${this._LOCAL_ADDRESS}:${this._PORT}/messages?size=${this.SIZE}`,
        {
          headers,
        }
      )
      .pipe(take(1))
      .subscribe((messages: any) => {
        this.spreadMessage(messages);
      });
  }

  private spreadMessage(messages: IMessage[]) {
    for (const message of messages) {
      const newMessage = this.convertToMessageType(message);
      this.message$.next(newMessage);
    }
  }

  public sendMessage(message: string): void {
    const time = new Date().toISOString();
    this.socket.emit("message", { message, id: this.id, time });
  }

  private convertToMessageType(message: IMessage) {
    const isMine = this.id === message.id;
    return { isMine, ...message };
  }

  private getNewMessage(): void {
    this.socket.on("message", (response: IMessage) => {
      const newMessage = this.convertToMessageType(response);
      this.message$.next(newMessage);
    });
  }
}
