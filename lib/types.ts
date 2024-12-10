export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  applications: string[];
}

export interface Filter {
  categories: string[];
  applications: string[];
}