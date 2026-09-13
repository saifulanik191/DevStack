import type { Dispatch, SetStateAction } from "react";
import type { ItechType } from "../Type/TechType";
import TechCard from "./TechCard";

interface IallStackProps {
  tech: ItechType[];
  techCount: number;
  setTechCount: Dispatch<SetStateAction<number>>;
  addedTech: ItechType[];
  setAddedTech: Dispatch<SetStateAction<ItechType[]>>;
}
const AllStack = ({
  tech,
  techCount,
  setTechCount,
  addedTech,
  setAddedTech,
}: IallStackProps) => {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-0">
      {tech.map((item: ItechType, ind: number) => {
        return (
          <TechCard
            key={ind}
            item={item}
            techCount={techCount}
            setTechCount={setTechCount}
            addedTech={addedTech}
            setAddedTech={setAddedTech}
          />
        );
      })}
    </div>
  );
};

export default AllStack;
