import { Injectable, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TransactionStatusUpdate {
  id: number;
  status: string;
  partnerReferenceId?: string;
  lastPartnerError?: string;
}

@Injectable({ providedIn: 'root' })
export class SignalRService implements OnDestroy {
  private hub: signalR.HubConnection | null = null;

  transactionStatusUpdated$ = new Subject<TransactionStatusUpdate>();

  startConnection(): void {
    if (this.hub) return;

    this.hub = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}hubs/transactions`, {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build();

    this.hub.on('TransactionStatusUpdated', (update: TransactionStatusUpdate) => {
      this.transactionStatusUpdated$.next(update);
    });

    this.hub.start().catch(err => console.error('SignalR connection error:', err));
  }

  stopConnection(): void {
    this.hub?.stop();
    this.hub = null;
  }

  ngOnDestroy(): void {
    this.stopConnection();
  }
}
