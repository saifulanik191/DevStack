import { useState, type Dispatch, type SetStateAction } from "react";
import type { ItechType } from "../Type/TechType";
import { toast } from "react-toastify";

interface ItechCardProps {
  item: ItechType;
  techCount: number;
  setTechCount: Dispatch<SetStateAction<number>>;
  addedTech: ItechType[];
  setAddedTech: Dispatch<SetStateAction<ItechType[]>>;
}

const TechCard = ({
  item,
  techCount,
  setTechCount,
  addedTech,
  setAddedTech,
}: ItechCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const isCurrentlyAdded =
    isAdded && addedTech.some((tech) => tech.name === item.name);

  const handletechAdd = () => {
    setIsAdded(true);
    setTechCount(techCount + 1);

    setAddedTech([...addedTech, item]);
  };

  return (
    <div
      className={`w-90 rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 ${
        isCurrentlyAdded ? "border-[#CB4EB8]" : "border-slate-100"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="mt-1">
          <div className="relative h-9 w-10">
            <img src={item.icon} alt={item.name} />
          </div>
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py- text-[16px] font-medium text-emerald-600">
          {item.badge}
        </span>
      </div>
      <div className="mt-5">
        <h2 className="text-[20px] font-bold text-slate-900">{item.name}</h2>

        <p className="mt-2 text-[16px] leading-7 text-slate-500 h-22 items-center">
          {item.description}
        </p>
      </div>

      <div className="my-4 border-t border-slate-100" />

      <div className="flex items-center justify-between text-[17px]">
        <span className="rounded-md bg-slate-100 px-1.5 py-1.5 text-slate-600 text-[14px]">
          {item.category}
        </span>

        <span className="text-slate-500 text-[14px]">{item.difficulty}</span>

        <span className="flex items-center gap-2 text-slate-700">
          <span className="text-yellow-400">★</span>
          {item.rating}
        </span>
      </div>

      <button
        onClick={() => {
          handletechAdd();
          toast(`${item.name} Is Added To Your Stack`);
        }}
        className={`btn ${
          isCurrentlyAdded
            ? "mt-6 w-full rounded-xl bg-[#CB4EB8] py-2 text-[16px] font-medium text-white transition hover:bg-slate-800"
            : "mt-6 w-full rounded-xl bg-[#080d1d] py-2 text-[16px] font-medium text-white transition hover:bg-slate-800"
        }`}
        disabled={isCurrentlyAdded === true ? true : false}
      >
        {isCurrentlyAdded === true ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
