import BaseTextInput from "../base/BaseTextInput";
import ClickableIcon from "../../elements/icons/ClickableIcon";
import type IUseInput from "../hooks/IUseInput";
import useToggle from "../../../hooks/use-toggle/UseToggle";

const PasswordInput: React.FC<PasswordInputProps> = ({ labelText = "Password", useInput }) => {
  const [inputType, toggle] = useToggle<string>("password", "text");

  return (
    <BaseTextInput inputType={inputType} labelText={labelText} useInput={useInput}>
      <ClickableIcon
        iconType="fas fa-eye"
        onClickHandler={toggle}
        onKeyDownHandler={toggle}
        options="is-small is-left"
      />
    </BaseTextInput>
  );
};

interface PasswordInputProps {
  labelText?: string;
  useInput: IUseInput;
}

export default PasswordInput;
