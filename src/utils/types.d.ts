export interface Vehicle {
  vin: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image_url: string;
  gallery: string[];
  ownership_history: OwnershipHistory[];
  accident_history: AccidentHistory[];
  interior_color?: string;
  exterior_color?: string;
  fuel_type?: string;
}

export interface OwnershipHistory {
  owner: string;
  start_date: string;
  end_date?: string | null;
}

export interface AccidentHistory {
  date: string;
  description: string;
}
