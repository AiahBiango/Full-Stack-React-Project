//services/posts.js
import { Post } from '../db/models/post.js'

export async function createPost({ title, author, contents, tags }) {
  const post = new Post({ title, author, contents, tags })
  return await post.save()
}
async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}
// List all posts
export async function listAllPosts(options) {
  return await listPosts({}, options)
}
// List posts by author
export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}
// List posts by tags
export async function listPostsByTags(tags, options) {
  return listPosts({ tags }, options)
}
