export default class EmailValidator {
  public static validate = (str: string): boolean => {
    return new RegExp("[a-zA-Z0-9.]*@[a-zA-Z]\.[a-zA-Z]").test(str);
  };
}
