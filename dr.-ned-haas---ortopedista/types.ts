export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: 'whatsapp' | 'facebook' | 'instagram';
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneRaw: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
}