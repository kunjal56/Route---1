import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ posts, handleDelete }) {

    //also add this
    // function handleDeletethis(id){
    //     handleDelete(id)
    // }

    function handleEdit(){
        
    }
    
    return (
        <div>

            <div className="container-fluid d-flex justify-content-center align-items-center" id='home'>
                <div className="row">
                    <div className="col-lg-12 text-white ">
                        <div className="text text-center">
                            <h1>DISCOVER THE EVEREST</h1>
                            <h5 className='mt-3 mb-5'>See the worls from 29,017 ft above sea level.</h5>

                            <div className="addedpost border text-start p-3 ">
                                <h6 className='text-secondary'>Added post_</h6>
                            {
                                posts.map((el) => (
                                    <div key={el.id}>
                                       <div>
                                        {el.image && <img src={el.image}/>}
                                       </div>
                                        <h4>{el.title}</h4>
                                        <p>{el.content}</p>

                                        <button className='btn btn-dark text-white me-2' onClick={() => handleEdit(el.id)}><Link to={`/edit/:${el.id}`} className='text-decoration-none text-white'>Edit</Link></button>
                                        <button type='button' className='btn btn-dark text-white' onClick={() => handleDelete(el.id)}>Delete</button>

                                        <hr />

                                    </div>
                                ))
                            }
                            </div>

                           <button className='btn btn-primary mt-3'> <Link to="/add" className='text-white fs-5 text-decoration-none'>add post</Link> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;
