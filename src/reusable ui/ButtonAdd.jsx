import { PlusIcon } from "@heroicons/react/20/solid";

const ButtonAdd = () => {
  return (
    <div>
      <button
        type="button"
        className="rounded-full bg-indigo-50 p-2  shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        <PlusIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ButtonAdd;
