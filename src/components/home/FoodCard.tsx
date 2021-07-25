import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IProps {
  title: string;
  image: string;
  description: string;
  ingredient1: string;
  ingredient2: string;
  ingredient3: string;
  ingredient4: string;
  ingredient5: string;
  ingredient6: string;
  ingredient7: string;
  ingredient8: string;
  ingredient9: string;
  ingredient10: string;
}

const FoodCard = ({
  title,
  image,
  description,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8,
  ingredient9,
  ingredient10,
}: IProps) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const className = "bg-gray-100 rounded-full text-center py-1 px-2 my-1 mx-1";

  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-full sm:w-1/3 md:w-1/4 xl:w-1/6 flex flex-col p-3 mx-auto"
    >
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                <div className="flex bg-white p-4">
                  <div className="p-4 w-3/12">
                    <img
                      className="rounded"
                      src={image}
                      width={400}
                      height={350}
                      alt={title}
                    />
                  </div>
                  <div className="p-4 w-9/12">
                    <h2 className="text-4xl font-medium pb-3">{title}</h2>
                    <p>{description}</p>
                    <h2 className="text-3xl font-medium py-3">Ingredient : </h2>
                    <ul className="flex">
                      <li className={className}>{ingredient1}</li>
                      <li className={className}>{ingredient2}</li>
                      <li className={className}>{ingredient3}</li>
                      <li className={className}>{ingredient4}</li>
                      <li className={className}>{ingredient5}</li>
                      {ingredient6 ? (
                        <li className={className}>{ingredient6}</li>
                      ) : null}
                      {ingredient7 ? (
                        <li className={className}>{ingredient7}</li>
                      ) : null}
                      {ingredient8 ? (
                        <li className={className}>{ingredient8}</li>
                      ) : null}
                      {ingredient9 ? (
                        <li className={className}>{ingredient9}</li>
                      ) : null}
                      {ingredient10 ? (
                        <li className={className}>{ingredient10}</li>
                      ) : null}
                    </ul>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="bg-white rounded-lg shadow-lg cursor-pointer">
        <div className="p-4 flex align-middle justify-center">
          <img
            className="rounded"
            src={image}
            width={180}
            height={180}
            alt={title}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="mb-4">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
