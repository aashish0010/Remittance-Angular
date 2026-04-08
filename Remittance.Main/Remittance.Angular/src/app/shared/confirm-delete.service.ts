import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class ConfirmDeleteService {

  confirm(itemLabel: string): Promise<void> {
    const isDark = document.documentElement.classList.contains('dark');

    return Swal.fire({
      title: 'Delete Confirmation',
      html: `Are you sure you want to delete<br><strong style="color:${isDark ? '#fca5a5' : '#ef4444'}">${itemLabel}</strong>?<br><span style="font-size:0.85rem;color:${isDark ? '#94a3b8' : '#64748b'}">This action cannot be undone.</span>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: isDark ? '#334155' : '#e2e8f0',
      reverseButtons: true,
      focusCancel: true,
      customClass: {
        popup: isDark ? 'swal-dark' : '',
        confirmButton: 'swal-confirm-btn',
        cancelButton: 'swal-cancel-btn',
      },
    }).then(result => {
      if (result.isConfirmed) return Promise.resolve();
      return Promise.reject();
    });
  }
}
