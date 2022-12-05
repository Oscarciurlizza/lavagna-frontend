const Alert = ({ children }) => {
  return (
    <div className="w-full px-3 py-2 bg-red-100 border-red-300 mt-2 border-l-2">
      <p className="text-xs font-normal text-red-400">{children}</p>
    </div>
  );
};

export default Alert;
