const puppies = [
    {
      id: 1,
      name: "Frisket",
      trait: "Mother of all pups",
      imagePath: "/images/1.jpg",
    },
    {
      id: 2,
      name: "Chase",
      trait: "Very good boi",
      imagePath: "/images/2.jpg",
    },
    {
      id: 3,
      name: "Leia",
      trait: "Enjoys naps",
      imagePath: "/images/3.jpg",
    },
    {
      id: 4,
      name: "Pupi",
      trait: "Loves cheese",
      imagePath: "/images/4.jpg",
    },
    {
      id: 5,
      name: "Russ",
      trait: "Ready to save the world",
      imagePath: "/images/5.jpg",
    },
    {
      id: 6,
      name: "Yoko",
      trait: "Ready for anything",
      imagePath: "/images/6.jpg",
    },
  ];
  
  export function Puppylist() {
    return (
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {puppies.map((puppy) => (
          <li
            key={puppy.id}
            className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
          >
            <img
              className="aspect-square object-cover"
              alt={puppy.name}
              src={puppy.imagePath}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
              <div className="flex items-center gap-2">
                <p className="font-semibold">{puppy.name}</p>
                <span className="text-slate-300">·</span>
                <p className="text-slate-500">{puppy.trait}</p>
              </div>
              <button className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    puppy.id === 2 // Chase
                      ? "fill-pink-500 stroke-none"
                      : "stroke-slate-200 group-hover:stroke-slate-300"
                  }
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }