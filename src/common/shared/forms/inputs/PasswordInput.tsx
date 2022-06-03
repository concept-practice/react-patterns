import BaseTextInput from "../base/BaseTextInput";
import EyeIcon from "../../elements/icons/EyeIcon";
import type IUseInput from "../hooks/IUseInput";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";
import useToggle from "../../../hooks/use-toggle/UseToggle";

const PasswordInput: React.FC<PasswordInputProps> = ({ labelText = "Password", useInput }) => {
  const [value, toggle] = useToggle<string>("password", "text");

  const onClickHandler = (): void => {};

  const onKeyDownHandler = (): void => {};

  return (
    <BaseTextInput inputType={value} labelText={labelText} useInput={useInput}>
      <div onClick={onClickHandler} onKeyDown={onKeyDownHandler} role="button" tabIndex={ValueDefaults.CanTabTo}>
        <EyeIcon />
      </div>
    </BaseTextInput>
  );
};

interface PasswordInputProps {
  labelText?: string;
  useInput: IUseInput;
}

export default PasswordInput;
