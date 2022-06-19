import type ProjectionProperties from "../../common/ProjectionProperties";

const InputField: React.FC<ProjectionProperties> = ({ children }) => {
  return <div className="field">{children}</div>;
};

export default InputField;
