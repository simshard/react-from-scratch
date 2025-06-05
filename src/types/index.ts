export type Puppy = {
    id: number;
    
    name: string;
    trait: string;
    image_url: string;
    likedBy: User["id"][];
  };

  export type User = {
    id: number;
  };  