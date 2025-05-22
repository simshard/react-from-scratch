import { Heart ,LoaderCircle} from "lucide-react";
import { Puppy } from "../types";
import { Dispatch, SetStateAction, useState } from "react";
//import { useLiked } from "../context/liked-context";

export function LikeToggle({
  id,
  liked,
  setLiked,
  }: {
  id: Puppy["id"];
  liked: Puppy["id"][];
  setLiked: Dispatch<SetStateAction<Puppy["id"][]> >;
  }) {
    const [pending, setPending ]= useState(false);
        return (
            <button className="group"
              onClick={() => {
                setPending(true);
                setTimeout(() => {
                  if (liked.includes(id)) {
                  setLiked(liked.filter((puppyId) => puppyId !== id));
                } else {
                  setLiked([...liked, id]);
                } 
               setPending(false);
                },1000);
                
              }
            }
             >
              {/* <pre>{JSON.stringify(pending)}</pre> */}
            {pending ? (  <LoaderCircle className="animate-spin stroke-red-300" />) : (
            <Heart
              className={
                liked.includes(id)
                  ? "fill-pink-500 stroke-none"
                  : "stroke-slate-200 group-hover:stroke-slate-300"
              }
            />
            )}
          </button>
        );
    }