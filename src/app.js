const yargs = require("yargs")
const { client, connect } = require("./db/connection")
const Movie = require("./utils/index")

const app = async (yargsObject) => {
    const movieCollection = await connect();
    if (yargsObject.create) {

        //code
        console.log("commnad1")
        const newMovie = new Movie(yargsObject.title, yargsObject.actor, yargsObject.director)
        await newMovie.add(movieCollection)

    } else if (yargsObject.read) {
        //code
        console.log("commnad2")
        const results = await movieCollection.find({}).toArray();
        console.table(results)
    } else if (yargsObject.update) {
        //code
        console.log("commnad3")
    } else if (yargsObject.delete) {
        //code
        console.log("commnad4")
    } else {
        console.log("commnad")
    }
    console.log("test")
    // setTimeout(() => {client.close()}, 100)
    await client.close()

}

app(yargs.argv)