import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blog1 from '../assets/blog_1.jpg';
import blog2 from '../assets/blog_3.jpg';
import blog3 from '../assets/blog_4.png';
import blog4 from '../assets/blog_5.jpg';
import blog5 from '../assets/blog_6.jpg';



const blogPosts = [
    {
        id: 1,
        title: "The Journey of Innovation",
        excerpt: "Explore how innovation drives our mission to create meaningful solutions.",
        image: blog1,
    },
    {
        id: 2,
        title: "Passion Behind Our Work",
        excerpt: "Discover the passion and dedication that fuel everything we do every day.",
        image: blog2,
    },
    {
        id: 3,
        title: "Building a Better Future",
        excerpt: "Learn about our vision to inspire positive change through quality and integrity.",
        image: blog3,
    },
    {
        id: 4,
        title: "Sustainable Innovation",
        excerpt: "How we integrate sustainability in our products and services.",
        image: blog4,
    },
    {
        id: 5,
        title: "Community Engagement",
        excerpt: "Our efforts to give back and engage with the community.",
        image: blog5,
    },
];

const Blog = () => {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Latest Blog Posts</h2>
            <p className="text-muted text-center para-p">Dive into insightful stories, expert tips, and the latest updates that reflect our passion and commitment. Here, we share everything from inspiring journeys and innovative ideas to practical advice and community highlights.</p>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
            >
                {blogPosts.map(({ id, title, excerpt, image }) => (
                    <SwiperSlide key={id}>
                        <div className="card blog-card h-100 shadow-sm">
                            <img src={image} className="card-img-top" alt={title} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{excerpt}</p>
                                <a href="/contact" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom : 60px 
        }
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
        }
        .card-img-top {
          object-fit: cover;
          height: 200px;
        }
      `}</style>
        </section>
    );
};

export default Blog;
