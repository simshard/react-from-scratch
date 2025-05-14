import { Pagewrapper } from "./components/Pagewrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { Puppylist } from "./components/Puppylist.js";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { puppies } from "./data/puppies.js";
import { useState } from "react";
import { Puppy } from "./types";
import { LikedContext } from "./context/liked-context";

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
return(
  <main>
    <LikedContext value={{liked, setLiked}}>
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search/>
      <Shortlist puppies={puppies} liked={liked} setLiked={setLiked}/>
    </div>
    <Puppylist  puppies={puppies}   />
    </LikedContext>
    <NewPuppyForm/> 
  </main>
)
}