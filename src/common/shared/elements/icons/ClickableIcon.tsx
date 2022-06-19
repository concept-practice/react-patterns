import type OptionsProperties from "../../common/OptionsProperties";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const ClickableIcon: React.FC<ClickableIconProperties> = ({
  onClickHandler,
  onKeyDownHandler,
  options = ValueDefaults.String,
  iconType,
}) => {
  return (
    <span
      className={`icon is-clickable ${options}`}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      role="button"
      tabIndex={ValueDefaults.CanTabTo}
      title="clickable icon"
    >
      <i className={iconType} />
    </span>
  );
};

interface ClickableIconProperties extends OptionsProperties {
  onClickHandler: () => void;
  onKeyDownHandler: () => void;
  iconType: string;
}

export default ClickableIcon;
