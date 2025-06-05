import { useRef, Dispatch, SetStateAction } from "react";
import { Delete } from "lucide-react";

export function Search({
   searchQuery,
   setSearchQuery
  }: {
    searchQuery: string, 
    setSearchQuery: Dispatch<SetStateAction<string> >;
  }) {
     const inputRef = useRef<HTMLInputElement>(null);
     return (   
    <div>
    <label htmlFor="search" className="font-medium">
      Filter puppies by trait
    </label>
    <div className="mt-2 flex items-center gap-4">
      <input
      ref ={inputRef}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="filter..."
        name="search"
        id="search"
        type="text"
        className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      />
      <button 
      onClick={() => {
            setSearchQuery("");
            inputRef.current?.focus();
            
          }}
      className="inline-block rounded bg-indigo-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-indigo-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      >
        <Delete />
      </button>
    </div>
  </div>
    );
}