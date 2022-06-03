import type ProjectionProps from "../../common/ProjectionProps";

const InputField: React.FC<ProjectionProps> = ({ children }) => {
  return <div className="field">{children}</div>;
};

export default InputField;
