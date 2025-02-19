
export interface ProductItemType {
    id: number;
    title: string;
    price: number;
    description: string;
    availabilityStatus: string;
    brand: string;
    category: string;
    dimensions: { width: number; height: number; depth: number };
    discountPercentage: number;
    images: string[];
    stock: number;
    reviews: { rating: number; comment: string; reviewerName: string }[];
    shippingInformation: string;
    returnPolicy: string;
    warrantyInformation: string;
    thumbnail: string;
    rating: number;
  }