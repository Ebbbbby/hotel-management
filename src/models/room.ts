type CoverImage={
url:string
}
export type Image={
url:string
_key:string
}
type Amenity={
amenity:string
_key:string
icon:string
}

type Slug={
  _type:string;
  current:string;

}


export  type Room ={
  _id:string;
  coverImage:CoverImage;
  description:string;
  dimension:string;
  discount:number;
  images:Image[];
  isBooked:boolean;
  isFeatured:boolean;
  name:string;
  numberOfBeds:number;
  offeredAmenities:Amenity[];
  price:number;
  slug:Slug;
  specialNote:string;
  type:string;
}

export type CreateBookingDto = {
user:string;
hotelRoom:string;
checkinDate:string;
checkoutDate:string;
numberOfDays:number;
adults:number;
children:number;
totalPrice:number;
discount:number;
}