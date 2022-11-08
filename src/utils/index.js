class Movie{
    constructor (title, actor="not s", director="not s"){
    this.title= title;
    this.actor= actor;
    this.director= director;
    }
    async add(movieCollection){
        console.log("add")
        await movieCollection.insertOne(this)
    }
}

module.exports= Movie