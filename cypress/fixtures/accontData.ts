import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
class AccountData {
    static email : string = 'conduitTC@test.com'
    static username : string = 'conduitTC'
    static password : string = 'mohammad'

    static newUsername : string
    static newEmail : string
    static newPassword : string

    static getNewUsername(): string{
        this.newUsername = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
        return this.newUsername
    }

    static getNewEmail(): string{
        this.newEmail = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }) + "@uniqeTC.com"
        return this.newEmail
    }

    static getNewPassword(): string{
        this.newPassword = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }) 
        return this.newPassword
    }
}

export default AccountData