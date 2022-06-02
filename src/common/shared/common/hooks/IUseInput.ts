export default interface IUseInput {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
