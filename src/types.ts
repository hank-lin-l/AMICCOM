export type ProductCategory = 'all' | 'ble' | 'sub1g' | '24g' | 'gnss';

export interface ChipSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ChipProduct {
  id: string;
  category: 'ble' | 'sub1g' | '24g' | 'gnss';
  categoryBadge: string;
  categoryBadgeStyle: string;
  package: string;
  name: string;
  subTitle: string;
  description: string;
  specs: ChipSpec[];
  targetMarket: string;
  features?: string[];
  voltageRange?: string;
  frequencyRange?: string;
}

export interface ApplicationVertical {
  id: string;
  icon: string;
  title: string;
  description: string;
  protocolTag: string;
  colorScheme: 'blue' | 'cyan';
}

export interface InquiryFormData {
  fullName: string;
  company: string;
  email: string;
  rfCategory: string;
  details: string;
}
