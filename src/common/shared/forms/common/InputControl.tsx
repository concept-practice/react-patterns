import type ProjectionOptionsProperties from "../../common/ProjectionOptionsProperties";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const InputControl: React.FC<ProjectionOptionsProperties> = ({ options = ValueDefaults.String, children }) => {
  return <div className={`control ${options}`}>{children}</div>;
};

export default InputControl;
