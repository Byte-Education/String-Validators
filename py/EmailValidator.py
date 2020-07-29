import re


class EmailValidator:
    @staticmethod
    def validate(email):
        regex = re.compile("[a-zA-Z0-9\.]*@[a-zA-Z]*\.[a-zA-Z]*")
        return re.match(regex, email) != None


