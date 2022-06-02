import type ProjectionProps from "../../common/ProjectionProp";

const InputControl: React.FC<ProjectionProps> = ({ children }) => {
  return <div className="control">{children}</div>;
};

export default InputControl;
