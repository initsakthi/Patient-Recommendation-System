import React from 'react'
import { Link } from 'react-router-dom';

const blogDetails = [
    {
        cardTitle: 'natural vegies',
        poster:'Admin',
        topic:'Web Design',
        img:'../img/blog-1.jpg',
        commants:15,
        description :'Pet hotel means boarding for dogs and other domesticated animals for overnight or daily stays.'
    },
    {
        cardTitle: 'Herbal meditions ',
        poster:'Chef Executive',
        topic:'Web Design',
        img:'../img/blog-2.jpg',
        commants:12,
        description :'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
        cardTitle: 'fresh food',
        poster:'Doctor',
        topic:'Web Design',
        img:'../img/blog-3.jpg',
        commants:20,
        description :'Take online courses to better understand your pets, take proper care of them, and train them.'
    }
];

const Blog = () => {
    return (
        <div className="container pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Herbal Blog</h4>
                <h1 className="display-4 m-0"><span className="text-primary">Updates</span> From Blog</h1>
            </div>
            <div className="row pb-3">
                {blogDetails.map((blog) => (
                <div className="col-lg-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src={blog.img} alt="" />
                        <div className="card-body bg-light p-4">
                            <h4 className="card-title text-truncate">{blog.cardTitle}</h4>
                            <div className="d-flex mb-3">
                                <small className="mr-2"><i className="fa fa-user text-muted"></i>{blog.cardTitle}</small>
                                <small className="mr-2"><i className="fa fa-folder text-muted"></i>{blog.poster}</small>
                                <small className="mr-2"><i className="fa fa-comments text-muted"></i>{blog.commants}</small>
                            </div>
                            <p>{blog.description}</p>
                            {/* <a className="font-weight-bold" href="">Read More</a> */}
                            <Link to="blogpages" className="font-weight-bold" >Read More</Link>
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Blog