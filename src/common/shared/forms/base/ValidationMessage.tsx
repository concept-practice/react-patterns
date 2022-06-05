const ValidationMessage: React.FC<ValidationMessageProps> = ({ validInput, validationMessage }) => {
  const showValidationMessage = (): string => {
    if (validInput) {
      return "valid";
    }
    return validationMessage;
  };

  const isDangerOrValid = (): string => {
    if (validInput) {
      return "is-invisible";
    }
    return "is-danger";
  };

  return <p className={`help ${isDangerOrValid()}`}>{showValidationMessage()}</p>;
};

interface ValidationMessageProps {
  validInput: boolean;
  validationMessage: string;
}

export default ValidationMessage;
