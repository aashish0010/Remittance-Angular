import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExportService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  export(endpoint: string, params: Record<string, any> = {}, format: 'excel' | 'csv' = 'excel'): void {
    const queryParams = new URLSearchParams();
    queryParams.set('format', format);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        queryParams.set(key, String(value));
      }
    });

    const url = `${this.baseUrl}${endpoint}?${queryParams.toString()}`;
    this.http.get(url, { responseType: 'blob', withCredentials: true }).subscribe({
      next: (blob) => {
        const ext = format === 'csv' ? 'csv' : 'xlsx';
        const contentType = format === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const file = new Blob([blob], { type: contentType });
        const downloadUrl = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `${endpoint.split('/').pop()}-export.${ext}`;
        a.click();
        URL.revokeObjectURL(downloadUrl);
      },
      error: () => {
        console.error('Export failed');
      }
    });
  }
}
