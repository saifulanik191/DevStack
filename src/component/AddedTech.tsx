import type { Dispatch, SetStateAction } from "react";
import type { ItechType } from "../Type/TechType";
import { toast } from "react-toastify";
interface IaddedProps {
  addedTech: ItechType[];
  setAddedTech: Dispatch<SetStateAction<ItechType[]>>;
  techCount: number;
  setTechCount: Dispatch<SetStateAction<number>>;
}

const AddedTech = ({
  addedTech,
  setAddedTech,
  techCount,
  setTechCount,
}: IaddedProps) => {
  const handleRemoveTech = (tech: ItechType) => {
    const restTech = addedTech.filter(
      (addedTech) => addedTech.name !== tech.name,
    );
    setAddedTech(restTech);

    const newTechCount = techCount - 1;
    setTechCount(newTechCount);
    toast.error(`${tech.name} removed!`);
  };

  const handleAllRemoveTech = () => {
    setAddedTech([]);
    setTechCount(0);
    toast.error("All technologies removed!");
  };

  return (
    <div>
      {addedTech.length === 0 ? (
        <div className="mt-5 flex h-19 items-center justify-center border border-dashed border-gray-400">
          <p className="font-medium text-gray-700">Your stack is empty</p>
        </div>
      ) : (
        <>
          {addedTech.map((tech) => (
            <div
              key={tech.name}
              className="mt-5 flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="mt-1">
                <div className="relative h-10 w-10">
                  <img src={tech.icon} alt={tech.name} />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>

                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>

              <button
                onClick={() => handleRemoveTech(tech)}
                className="text-3xl text-gray-400"
              >
                ×
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleAllRemoveTech}
              className="btn btn-outline btn-secondary w-full rounded-xl"
            >
              Remove All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddedTech;
