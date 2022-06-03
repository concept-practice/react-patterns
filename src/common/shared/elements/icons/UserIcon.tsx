import Icon from "./Icon";
import type OptionsProps from "../../common/OptionsProps";

const UserIcon: React.FC<OptionsProps> = ({ options }) => {
  return <Icon iconType="fa-solid fa-user" options={options} />;
};

export default UserIcon;
