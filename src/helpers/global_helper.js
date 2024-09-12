import { toast } from "react-toastify";

const showToast = (message = "", type = "success", autoClose = 2000) => {
  switch (type) {
    case "error":
      toast.error(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;

    case "error":
      toast.info(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;
    default:
      toast(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      break;
  }
};

export default showToast;
