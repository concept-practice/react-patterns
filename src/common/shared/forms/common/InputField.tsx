import type ProjectionProps from "../../common/ProjectionProp";

const InputField: React.FC<ProjectionProps> = ({ children }) => {
  return <div className="field">{children}</div>;
};

export default InputField;
