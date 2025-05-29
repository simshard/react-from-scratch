import { Pagewrapper } from "./components/Pagewrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { Puppylist } from "./components/Puppylist.js";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { puppies as puppiesData} from "./data/puppies.js";
import { Suspense, use, useState } from "react";
import { Puppy } from "./types";
import { LoaderCircle } from "lucide-react";
import { getPuppies } from "./queries/index.ts";
import { ErrorBoundary } from "react-error-boundary";



export function App() {
  return (
  <Pagewrapper>
    <Container>
      <Header />
      <Main />
   </Container>
  </Pagewrapper>
  );
}

function Main() {
  const[liked,setLiked] =useState<Puppy["id"][]>([1]);
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);
return(
  <> 
  <main>
    <ErrorBoundary
        fallbackRender={({ error }) => (
          <div className="mt-12 bg-red-100 p-6 shadow ring ring-black/5">
            <p className="text-red-500">
              {error.message}: {error.details}
            </p>
          </div>
        )}
      >
     <Suspense
          fallback={
            <div className="mt-12 bg-white p-6 shadow ring ring-black/5">
              <LoaderCircle className="animate-spin stroke-red-600" />
            </div>
          }
        >
          <ApiPuppies />
      </Suspense>
    </ErrorBoundary>
         
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
       <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}  /> 
      <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
    </div>
    <Puppylist  puppies={puppies} searchQuery={searchQuery}  liked={liked} setLiked={setLiked}  />
    <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/> 
  </main>
  </>
)
}

const puppyPromise = getPuppies();

function ApiPuppies() {
  const apiPuppies = use(puppyPromise);
    return (
     <div className="mt-12 bg-green-100 p-6 shadow ring ring-black/5">
      <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
      </div>
    );
}