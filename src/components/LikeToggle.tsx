import { Heart ,LoaderCircle} from "lucide-react";
import { Puppy } from "../types";
import { Dispatch, SetStateAction, useState } from "react";
import { toggleLikedStatus } from "../queries";

export function LikeToggle({
  puppy,setPuppies
}: {
  puppy: Puppy;
  setPuppies: Dispatch<SetStateAction<Puppy[]> >;
}) {
    const [pending, setPending ]= useState(false);
    const likedBy = puppy.likedBy;


        return (
            <button className="group"
              onClick={async() => {
                setPending(true);
                const updatedPuppy= await toggleLikedStatus(puppy.id);
                console.log(updatedPuppy);
                setPuppies((prevPups) => {
                  return prevPups.map((existingPuppy) =>
                    existingPuppy.id === updatedPuppy.id ? updatedPuppy : existingPuppy,
                  );
                })
                setPending(false);  
              }
             }
            >
            {pending ? (  <LoaderCircle className="animate-spin stroke-red-300" />) : (
            <Heart
              className={
                likedBy.includes(1)
                  ? "fill-pink-500 stroke-none"
                  : "stroke-slate-200 group-hover:stroke-slate-300"   
              }
            />
            )}
          </button>
        );
    }