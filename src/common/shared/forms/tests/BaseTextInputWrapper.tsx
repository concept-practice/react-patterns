import BaseTextInput from "../base/BaseTextInput";
import useInput from "../../common/hooks/UseInput";

const BaseTextInputWrapper: React.FC = () => {
  const input = useInput();

  return (
    <>
      <BaseTextInput labelText="text" useInput={input} />
      {input.value}
    </>
  );
};

export default BaseTextInputWrapper;
