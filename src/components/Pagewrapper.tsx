import { ReactNode } from 'react';
export function  Pagewrapper({children}:{children: ReactNode}) {  
    return (
      <div className="min-h-dvh bg-gradient-to-b from-orange-200 to-white to-[60vh]">
        {children}
      </div>
    );
  }