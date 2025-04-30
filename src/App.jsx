import { Pagewrapper } from "./components/Pagewrapper.tsx";
import { Container } from "./components/Container.tsx";
import { Header } from "./components/Header.tsx";
import { Search } from "./components/Search.tsx";
import { Shortlist } from "./components/Shortlist.tsx";
import { Puppylist } from "./components/Puppylist.js";
import { NewPuppyForm } from "./components/NewPuppyForm.tsx";
import { puppies } from "./data/puppies.js";

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
return(
  <main>
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search/>
      <Shortlist/>
    </div>
    <Puppylist  puppies={puppies} />
    <NewPuppyForm/> 
  </main>
)
}