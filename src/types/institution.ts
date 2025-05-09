export interface Institution {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  rating: number;
  contact: string;
  website?: string;
  founded?: string;
  specialties?: string[];
}
