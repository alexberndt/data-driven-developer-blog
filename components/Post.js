export default function Post({ post }) {
  return (

    <a href={`/blog/${post.slug}`}>
      <div className='card'>
        <img src={post.frontmatter.cover_image} alt='' />
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.excerpt}</p>
      </div>
    </a>
  )
}
