import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator';
import User from './model/user';
class AccountData {
    static email : string = 'conduit-TC@test.com'
    static username : string = 'conduitTC'
    static password : string = 'mohammad'
    static bio : string = 'Bio' 

    static newUsername : string
    static newEmail : string
    static newPassword : string
    static newBio : string = 'Bio'


    static createNewUserData(): User{
        return new User(
            uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals, names], separator : "" }) + "TC",
            uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals]}) + "@uniqeTC.com",
            uniqueNamesGenerator({ dictionaries: [adjectives,colors], separator : ""}) ,
            "bio",
            "https://us-tuna-sounds-images.voicemod.net/1f142fc4-2735-4dac-8a3f-d1e041cee417-1664232879534.jpg"
        )
    }

    static getNewUsername(): string{
        this.newUsername = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals, names], separator : "" }) + "TC"
        return this.newUsername
    }

    static getNewEmail(): string{
        this.newEmail = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals]}) + "@uniqeTC.com"
        return this.newEmail
    }

    static getNewPassword(): string{
        this.newPassword = uniqueNamesGenerator({ dictionaries: [adjectives,colors], separator : ""}) 
        return this.newPassword
    }
}

export default AccountData