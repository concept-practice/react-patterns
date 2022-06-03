import type OptionsProps from "../../common/OptionsProps";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const Icon: React.FC<IconProps> = ({ options = ValueDefaults.String, iconType }) => {
  return (
    <span className={`icon ${options}`}>
      <i className={iconType} />
    </span>
  );
};

interface IconProps extends OptionsProps {
  iconType: string;
}

export default Icon;
