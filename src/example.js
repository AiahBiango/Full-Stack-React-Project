import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase() 

const post = new Post({ 
    title: 'Hello Mongoose!',
    author: 'Aiah Biango',
    contents: 'This post is stored in a MongoDB database using Mongoose.',
    tags: ['mongoose', 'mongodb']
})
const CreatedPost = await post.save()
await Post.findByIdAndUpdate(CreatedPost._id, { 
    $set: {title: 'Hello again, Mongoose!'}
})

const posts = await Post.find()
console.log(posts)
