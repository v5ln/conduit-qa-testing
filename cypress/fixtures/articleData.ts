class ArticleData {
    static Title : string = 'Conduit Test Article'
    static Description : string = 'This is a test article created by cypress'
    static Body : string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    static TagList : string[] = ["test", "conduitTC"]
    static newTitleNumber : string = ''
    static newTitleId : string

    static Comment : string = 'tc comment'
    static CommentId : number


    static slug : string = ''



    static getTitleNumber (title: string = this.Title, url: string): string{
        this.newTitleNumber = url
        .split('/')
        .filter(x => x
            .split(/[^a-zA-Z.!]+/g)
            .join(' ')
            .includes(title
            .split(/[^a-zA-Z.!]+/g)
            .join(' ')))
        .toString()
        .split('-')
        .slice(-1)[0]
        .split('?')[0]
        return this.newTitleId
    }

    static compineSlug(title: string = this.Title, url?: string){
        if (this.newTitleNumber == ''){
            this.getTitleNumber(title, url!)
        }
        this.newTitleId = 
        (title + '-' + this.newTitleNumber)
        .split(/[^a-zA-Z.!]+/g).join('-')
        return this.newTitleId
    }

    static getSlug(title: string = this.Title, url?: string){
        if (this.slug != ''){
            return this.slug;
        }
        return this.compineSlug(title, url)
    }
}

export default ArticleData