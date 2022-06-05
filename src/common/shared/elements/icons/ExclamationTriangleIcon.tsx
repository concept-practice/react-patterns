import Icon from "./Icon";
import type OptionsProps from "../../common/OptionsProps";

const ExclamationTriangleIcon: React.FC<OptionsProps> = ({ options }) => {
  return <Icon iconType="fas fa-exclamation-triangle" options={options} />;
};

export default ExclamationTriangleIcon;
