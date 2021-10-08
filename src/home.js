
// import {useState , useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    // in the below line we are renaming data as blogss
    const {data :blogs , isPending , error}= useFetch('http://localhost:8000/blogs')

    return (  
        <div className="home">
        { error && <div>{ error }</div>}
          {isPending &&<div>Loading...</div>}
          {blogs &&<BlogList blogs={blogs} title={`All blogs`} />}
          {/* <BlogList  blogs={blogs} title={`Mario's blogs`} handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;