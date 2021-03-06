import BaseTextInput from "../base/BaseTextInput";
import ClickableIcon from "../../elements/icons/ClickableIcon";
import type IUseInput from "../hooks/IUseInput";
import useToggle from "../../../hooks/use-toggle/UseToggle";

const PasswordInput: React.FC<PasswordInputProperties> = ({ labelText = "Password", useInput }) => {
  const [inputType, toggle] = useToggle<string>("password", "text");

  return (
    <BaseTextInput inputType={inputType} labelText={labelText} required useInput={useInput}>
      <ClickableIcon
        iconType="fas fa-eye"
        onClickHandler={toggle}
        onKeyDownHandler={toggle}
        options="is-small is-left"
      />
    </BaseTextInput>
  );
};

interface PasswordInputProperties {
  labelText?: string;
  useInput: IUseInput;
}

export default PasswordInput;
