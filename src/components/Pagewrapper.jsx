export function  Pagewrapper({children}) {
    return (
      <div className="min-h-dvh bg-gradient-to-b from-orange-200 to-purple-400/100 to-[60vh]">
        {children}
      </div>
    );
  }