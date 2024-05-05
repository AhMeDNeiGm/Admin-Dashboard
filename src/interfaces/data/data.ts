// Data >> Team & Contacts Component
export interface RowData {
  id: number; // Change id type to number to match the data
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string; // Add address field
  city: string; // Add city field
  zipCode: string; // Add zipCode field
  registrarId: number; // Add registrarId field
  access: string;
}

// Data >> Home Component
export interface DataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

// Data >> Home Component
export interface Transaction {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

// User Data >> Form Component
export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  ContactNumber: string;
  city?: string;
  address?: string;
  age?: number;
  zipCode?: string;
  access?: string;
}
