import type OptionsProperties from "../../common/OptionsProperties";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const Icon: React.FC<IconProperties> = ({ options = ValueDefaults.String, iconType }) => {
  return (
    <span className={`icon ${options}`}>
      <i className={iconType} />
    </span>
  );
};

interface IconProperties extends OptionsProperties {
  iconType: string;
}

export default Icon;
