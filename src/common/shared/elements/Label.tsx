const Label: React.FC<LabelProperties> = ({ htmlFor, text }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

interface LabelProperties {
  htmlFor: string;
  text: string;
}

export default Label;
