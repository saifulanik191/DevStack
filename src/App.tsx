import { Suspense, useState } from "react";
import Tech from "./component/Tech";
import type { ItechType } from "./Type/TechType";
import Nav from "./component/Nav";
import Banner from "./component/Banner";
import Footer from "./component/Footer";

const techFetch = async (): Promise<ItechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  // console.log(techFetch);
  // const techPromise = techFetch();
  const [techpromise] = useState(() => techFetch());
  const [techCount, setTechCount] = useState(0);
  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<h2>Data Loading.....</h2>}>
        <Tech
          techPromise={techpromise}
          techCount={techCount}
          setTechCount={setTechCount}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
