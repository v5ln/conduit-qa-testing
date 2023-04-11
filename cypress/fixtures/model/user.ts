class User{
    email : string
    username : string
    password : string
    bio : string 
    image : string

    constructor (username: string, email: string, password: string, bio: string, image: string){
        this.username = username
        this.email = email
        this.password = password
        this.bio = bio
        this.image = image
    }
    
}

export default User