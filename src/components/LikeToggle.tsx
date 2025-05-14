import { Heart } from "lucide-react";
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
   // const {liked, setLiked }= useLiked();
        return (
            <button className="group"
              onClick={() => {
                if (liked.includes(id)) {
                  setLiked(liked.filter((puppyId) => puppyId !== id));
                } else {
                  setLiked([...liked, id]);
                }
              }
            }
             >
            <Heart
              className={
                liked.includes(id)
                  ? "fill-pink-500 stroke-none"
                  : "stroke-slate-200 group-hover:stroke-slate-300"
              }
            />
          </button>
        );
    }