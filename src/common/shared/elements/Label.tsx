const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

interface LabelProps {
  htmlFor: string;
  text: string;
}

export default Label;
