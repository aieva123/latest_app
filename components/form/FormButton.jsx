import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const FormButton = ({ size, remove, add }) => {

    return (
      <div className="flex-wrap-gap-2 mb-1">
        <button type="button" onClick={add}
          aria-label="Add"
          className="p-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:from-purple-500 hover:to-pink-500">
          <MdAddCircle />
        </button>
        {
          size > 0 &&
          <button type="button" onClick={remove}
            aria-label="Remove"
            className="p-2 text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-lg text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:from-red-500 hover:to-pink-500">
            <MdRemoveCircle />
          </button>
        }
      </div>
    )
  }

export default FormButton;