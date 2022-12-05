const Label = ({ type, text }) => {
  return (
    <label htmlFor={type} className="font-medium text-xs text-gray-800">
      {text}
    </label>
  );
};

export default Label;
