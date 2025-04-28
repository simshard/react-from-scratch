import { Pagewrapper } from "./components/Pagewrapper.jsx";
import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";
import { Search } from "./components/Search.jsx";
import { Shortlist } from "./components/Shortlist.jsx";
import { Puppylist } from "./components/Puppylist.jsx";
import { NewPuppyForm } from "./components/NewPuppyForm.jsx";

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
    <Puppylist/>
    <NewPuppyForm/> 
  </main>
)
}