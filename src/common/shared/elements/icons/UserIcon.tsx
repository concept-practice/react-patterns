import Icon from "./Icon";
import type OptionsProperties from "../../common/OptionsProperties";

const UserIcon: React.FC<OptionsProperties> = ({ options }) => {
  return <Icon iconType="fas fa-user" options={options} />;
};

export default UserIcon;
