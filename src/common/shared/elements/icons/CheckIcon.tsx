import Icon from "./Icon";
import type OptionsProperties from "../../common/OptionsProperties";

const CheckIcon: React.FC<OptionsProperties> = ({ options }) => {
  return <Icon iconType="fas fa-check" options={options} />;
};

export default CheckIcon;
