export interface PetPortraitInterface {
  id?: number | string;
  title: string;
  image: string;
  altText: string;
  dimensions?: string;
  medium?: "Coloured Pencil" | "Graphite Pencil" | "Pastel";
  surface?: string;
  date?: Date;
}
