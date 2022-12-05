import toast from "react-hot-toast";

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    style: {
      backgroundColor: "#e0f2fe",
      fontWeight: "normal",
      fontSize: ".9rem",
      border: "1px solid #000",
      borderRadius: "0px"
    },
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    style: {
      backgroundColor: "#fecaca",
      fontWeight: "normal",
      fontSize: ".9rem",
      border: "1px solid #000",
    },
  });
};
