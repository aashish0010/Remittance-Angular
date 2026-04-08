import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ConfirmDeleteService {
  constructor(private confirmationService: ConfirmationService) {}

  confirm(itemLabel: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.confirmationService.confirm({
        message: `Are you sure you want to delete <strong>${itemLabel}</strong>?<br>This action cannot be undone.`,
        header: 'Delete Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Yes, Delete',
        rejectLabel: 'Cancel',
        acceptButtonStyleClass: 'p-button-danger confirm-delete-accept',
        rejectButtonStyleClass: 'p-button-text p-button-secondary confirm-delete-reject',
        defaultFocus: 'reject',
        accept: () => resolve(),
        reject: () => reject(),
      });
    });
  }
}
