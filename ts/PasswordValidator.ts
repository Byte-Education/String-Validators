export default class PasswordValidator {
  private static hasDigit = (str : string) : boolean => {
    return new RegExp("[0-9]").test(str);
  }

  private static hasUpper = (str: string) : boolean => {
    return new RegExp("[A-Z]").test(str);
  }

  private static hasLower = (str: string) : boolean => {
    return new RegExp("[a-z]").test(str);
  }

  private static hasNonAlpha = (str: string) : boolean => {
    return new RegExp("[^a-zA-Z0-9]").test(str);
  }

  public static validate = (str : string) : boolean => {
    return str.length > 8 && PasswordValidator.hasDigit(str) && PasswordValidator.hasLower(str) && PasswordValidator.hasUpper(str) && PasswordValidator.hasNonAlpha(str);
  }
}