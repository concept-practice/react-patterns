import type OptionsProps from "../../common/OptionsProps";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

const ClickableIcon: React.FC<ClickableIconProps> = ({
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
    >
      <i className={iconType} />
    </span>
  );
};

interface ClickableIconProps extends OptionsProps {
  onClickHandler: () => void;
  onKeyDownHandler: () => void;
  iconType: string;
}

export default ClickableIcon;
