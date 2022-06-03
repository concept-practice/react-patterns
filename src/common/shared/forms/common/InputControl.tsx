import type ProjectionOptionsProps from "../../common/ProjectionOptionsProps";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const InputControl: React.FC<ProjectionOptionsProps> = ({ options = ValueDefaults.String, children }) => {
  return <div className={`control ${options}`}>{children}</div>;
};

export default InputControl;
