
import AllBlogs from '../../../public/Blogs.json'; 
import Blog from './Blog';
const Services = () => {
    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-center font-medium text-4xl mb-10'>Recent News & Blog</h1>
       <div className="services-list grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Blog AllBlogs={AllBlogs}/>
      
    </div>
        </div>
    );
};
export default Services;