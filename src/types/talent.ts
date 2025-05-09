export interface Talent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  category: string[];
  skills: string[];
  experience: string;
  portfolio?: string;
  profileImage?: string;
  dateAdded: string;
}
