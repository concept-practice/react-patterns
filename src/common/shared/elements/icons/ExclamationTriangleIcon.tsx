import Icon from "./Icon";
import type OptionsProperties from "../../common/OptionsProperties";

const ExclamationTriangleIcon: React.FC<OptionsProperties> = ({ options }) => {
  return <Icon iconType="fas fa-exclamation-triangle" options={options} />;
};

export default ExclamationTriangleIcon;
