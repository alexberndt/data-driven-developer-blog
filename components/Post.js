export default function Post({ post }) {
  return (

    <a href={`/blog/${post.slug}`}>
      <div className='card'>
        <img src={post.frontmatter.cover_image} alt='' />
        <h3 class='card-title'>{post.frontmatter.title}</h3>
        <p class='card-date'>{post.frontmatter.date}</p>
        <p class='card-excerpt'>{post.frontmatter.excerpt}</p>
      </div>
    </a>
  )
}
