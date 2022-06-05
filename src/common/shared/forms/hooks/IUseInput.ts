export default interface IUseInput {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valid: boolean;
  value: string;
  validationMessage: string;
}
