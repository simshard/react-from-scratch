import { Pagewrapper } from "./components/Pagewrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { Puppylist } from "./components/Puppylist.js";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { puppies as puppiesData} from "./data/puppies.js";
import { use, useState,useEffect } from "react";
import { Puppy } from "./types";
import { LoaderCircle } from "lucide-react";
//import { LikedContext } from "./context/liked-context";



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
  <main>
    <ApiPuppies/> 
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
       <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}  /> 
      <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
    </div>
    <Puppylist  puppies={puppies} searchQuery={searchQuery}  liked={liked} setLiked={setLiked}  />
    <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/> 
  </main>
)
}

function ApiPuppies() {
  const [puppies, setPuppies] = useState<[]>([]);  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string >("");
   useEffect(() => {
    //fetch puppies
     async function getPuppies ()  {
      setIsLoading(true);
      try {
    const response = await fetch("http://localhost:8000/api/puppies");
    if(!response.ok) {
      const errorData = await response.json();
      setError(`${errorData.code}: ${errorData.message}`);
      throw errorData;
    }
    const data = await response.json();
    //console.log(data);
    setPuppies(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
     }
     getPuppies();

     }, []);

    return (
      <div className="bg-white p-6 mt-12 shadow ring ring-black/5">
        <h2 className="flex items-center gap-2 font-medium">
          <span>Api puppies</span></h2>
          {isLoading ? (
            <LoaderCircle className="animate-spin stroke-red-600" />
          ):( <pre>{JSON.stringify(puppies, null, 2)}</pre>)
          }
         
        
      </div>
    );
}