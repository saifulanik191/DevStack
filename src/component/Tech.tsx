import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { ItechType } from "../Type/TechType";
import AllStack from "./AllStack";
import AddedTech from "./AddedTech";

interface TechProps {
  techPromise: Promise<ItechType[]>;
  techCount: number;
  setTechCount: Dispatch<SetStateAction<number>>;
}

const Tech = ({ techPromise, techCount, setTechCount }: TechProps) => {
  // console.log(techPromise);
  const tech = use(techPromise);

  const [addedTech, setAddedTech] = useState<ItechType[]>([]);
  // console.log(tech, "All-tech");
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold ">
        Explore the <span className="text-[#CB4EB8]">Technologies</span>
      </h2>
      <p className="py-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-12 gap-4 mt-10 ">
        {/*All stack*/}
        <div className=" col-span-9 ">
          <AllStack
            tech={tech}
            techCount={techCount}
            setTechCount={setTechCount}
            addedTech={addedTech}
            setAddedTech={setAddedTech}
          />
        </div>

        {/* Your stack */}
        <div className="col-span-3  p-5  border border-gray-200 rounded-xl">
          <h2 className="font-bold text-2xl">Your stack</h2>
          <h2 className=" pt-1 text-gray-400">{techCount} Tech seleted</h2>
          <div>
            <AddedTech
              addedTech={addedTech}
              setAddedTech={setAddedTech}
              techCount={techCount}
              setTechCount={setTechCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
