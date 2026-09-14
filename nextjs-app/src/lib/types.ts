export type ServiceKey = "cellphone" | "laptop" | "computer" | "cctv";

export interface SiteMedia {
  hero?: string;
  services?: Partial<Record<ServiceKey, string>>;
}

export interface GalleryItem {
  type: "image" | "video";
  url: string;
  caption?: string;
  active?: boolean;
  createdAt?: unknown;
}
