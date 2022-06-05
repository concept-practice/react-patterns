import useBooleanToggle from "../../../hooks/use-boolean-toggle/UseBooleanToggle";

const ValidationMessage: React.FC<ValidationMessageProps> = ({ validInput, validationMessage }) => {
  const showValidationMessage = useBooleanToggle("valid", validationMessage, validInput);
  const isDangerOrValid = useBooleanToggle("is-invisible", "is-danger", validInput);

  return <p className={`help ${isDangerOrValid}`}>{showValidationMessage}</p>;
};

interface ValidationMessageProps {
  validInput: boolean;
  validationMessage: string;
}

export default ValidationMessage;
