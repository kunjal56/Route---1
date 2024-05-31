import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogPage({ addnewPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addnewPost(title, content);
        setTitle('');
        setContent('');
    }

    return (
        <div>

            <div className="container-fluid text-white" id='home'>
                <div className="row justify-content-center pt-5">
                    <div className="col-lg-5 rounded-3 p-5" id='addbox'>
                        <form action="" onSubmit={handleSubmit}>
                            
                            <h5>Title:</h5>
                            <input type="text" className='form-control bg-transparent text-white' value={title} onChange={(e) => setTitle(e.target.value)} />
                            
                            <h5 className='mt-4'>Content:</h5>
                            <textarea value={content} className='form-control mb-4 bg-transparent text-white' onChange={(e) => setContent(e.target.value)} ></textarea>
                       
                            <button type='submit' className='btn border text-white'>add</button>
                        </form>

                        <Link to='/' className='btn btn-primary text-white mt-4'>Back to Home</Link>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default BlogPage;
