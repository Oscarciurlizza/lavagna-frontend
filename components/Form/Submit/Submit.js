const Submit = ({ loading, children }) => {
  return (
    <button
      type="submit"
      className="w-full bg-black text-white text-base font-normal px-6 py-3"
    >
      {loading ? <span className="loader"></span> : children}
    </button>
  );
};

export default Submit;
