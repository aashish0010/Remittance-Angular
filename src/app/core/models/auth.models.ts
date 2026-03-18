export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  expiration: string;
  userId: string;
  fullName: string;
  email: string;
  roles: string[];
  portal: string;
  availablePortals: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: string[];
}

export interface MenuPrivilege {
  menuId: number;
  name: string;
  icon?: string;
  url?: string;
  displayOrder: number;
  actions: string[];
  children: MenuPrivilege[];
}
