import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {"http://localhost:5001/blogs"
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:5001/blogs");
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && "loading..."}
      {blog && <BlogList blog={blog} title="All blogs"/>}
    </div>
  )
}

export default Home