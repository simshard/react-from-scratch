export   function Header (){
    return (
      <header>
      <a className="group" href="/">
        <div className="inline-flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="DevPix"
            className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
          />
          <p className="text-lg font-semibold">Dev Pix</p>
        </div>
      </a>
      <div className="mt-6">
        <h1 className="text-lg font-bold">some pictures are here</h1>
        <p className="text-slate-600">
          Dont just waste all your time looking at them 
        </p>
      </div>  
    </header>
    );
  }