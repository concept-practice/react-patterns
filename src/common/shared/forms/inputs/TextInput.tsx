import BaseTextInput from "../base/BaseTextInput";
import type IUseInput from "../hooks/IUseInput";
import UserIcon from "../../elements/icons/UserIcon";

const TextInput: React.FC<TextInputProperties> = ({ labelText, useInput }) => {
  return (
    <BaseTextInput labelText={labelText} useInput={useInput}>
      <UserIcon options="is-small is-left" />
    </BaseTextInput>
  );
};

interface TextInputProperties {
  labelText: string;
  useInput: IUseInput;
}

export default TextInput;
