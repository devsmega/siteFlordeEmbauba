export interface Service {
  title: string;
  items: string[];
  icon: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
  instagram: string;
}
