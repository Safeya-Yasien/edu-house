type TInstructor = {
  name: string;
  image_url: string;
};

export type TCourse = {
  _id: string;
  title: string;
  image_url: string;
  hours: string;
  lessons: number;
  price: string;
  instructor: TInstructor;
  rating: number;
  level: string;
};
