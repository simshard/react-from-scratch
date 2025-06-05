import { Puppy } from "../types";
import { Loader, LoaderCircle, X , Heart} from "lucide-react";
import { toggleLikedStatus } from "../queries";
import { Dispatch, SetStateAction, useState } from "react";

export function Shortlist({
  puppies,setPuppies,
 }:
   {
    puppies: Puppy[];
    setPuppies: Dispatch<SetStateAction<Puppy[]>>;
    }
) {
        return (
            <div>
            <h2 className="flex items-center gap-2 font-medium">
              <span>Your shortlist</span>
              <Heart className="stroke-pink-600 fill-pink-400" />
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
            {puppies
          .filter((pup) => pup.likedBy.includes(1))
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
              <DeleteButton id={puppy.id} setPuppies={setPuppies} />
              </li>
               ))}
            </ul>
          </div>
        );
    }

    function DeleteButton({
  id,
  setPuppies,
}: {
  id: Puppy["id"];
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
}) {
  const [pending, setPending] = useState(false);
  return (
    <button
      onClick={async () => {
        setPending(true);
        const updatedPuppy = await toggleLikedStatus(id);
        setPuppies((prevPups) => {
          return prevPups.map((puppy) =>
            puppy.id === updatedPuppy.id ? updatedPuppy : puppy,
          );
        });
        setPending(false);
      }}
      className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
      disabled={pending}
    >
      {pending ? (
        <LoaderCircle className="size-4 animate-spin stroke-slate-300" />
      ) : (
        <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
      )}
    </button>
  );
}