import { Pagewrapper } from "./components/Pagewrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { Puppylist } from "./components/Puppylist.js";
import { NewPuppyForm } from "./components/NewPuppyForm";
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