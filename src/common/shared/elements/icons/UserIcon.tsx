import Icon from "./Icon";
import type OptionsProps from "../../common/OptionsProps";

const UserIcon: React.FC<OptionsProps> = ({ options }) => {
  return <Icon iconType="fas fa-user" options={options} />;
};

export default UserIcon;
