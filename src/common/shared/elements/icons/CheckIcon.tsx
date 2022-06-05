import Icon from "./Icon";
import type OptionsProps from "../../common/OptionsProps";

const CheckIcon: React.FC<OptionsProps> = ({ options }) => {
  return <Icon iconType="fas fa-check" options={options} />;
};

export default CheckIcon;
