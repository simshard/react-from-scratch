import  {use, Dispatch, SetStateAction} from "react";
//import { useLiked } from "../context/liked-context";
import { Puppy } from "../types";
import { X } from "lucide-react";
import { Heart } from "lucide-react";
 
interface ShortlistProps {
    liked: Puppy["id"][];
    setLiked: Dispatch<SetStateAction<Puppy["id"][]> >;
  }


export function Shortlist({
  puppies,
  liked,
  setLiked,
 }:
   {
    puppies: Puppy[];
    liked: Puppy["id"][];
    setLiked: Dispatch<SetStateAction<Puppy["id"][]> >;
    }
) {
   // const{liked, setLiked} = useLiked();
        return (
            <div>
            <h2 className="flex items-center gap-2 font-medium">
              <span>Your shortlist</span>
              <Heart className="stroke-pink-600 fill-pink-400" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
            {puppies
          .filter((pup) => liked.includes(pup.id))
          .map((puppy) => (
              <li 
              key={puppy.id}
              className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
                <img
                  height={32}
                  width={32}
                  alt={puppy.name}
                  className="aspect-square w-8 object-cover"
                  src={puppy.image_url}
                />
                <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
                <button
                onClick={() => setLiked(liked.filter((id) => id !== puppy.id))} 
                className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
                </button>
              </li>
               ))}
            </ul>
          </div>
        );
    }