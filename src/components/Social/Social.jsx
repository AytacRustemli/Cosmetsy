import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../api/config";
import { getBlogAction } from "../../redux/Actions/BlogAction";
import "./social.scss";

const Social = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const getBlogs = async () => {
    await fetch(BASE_URL + "blog/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };
  useEffect(() => {
    dispatch(getBlogAction());
    getBlogs();
  }, []);

  return (
    <div>
      <section id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="box">
                <button>
                  <input placeholder="Search..." type="text" name="" id="" />
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="boxes1">
                <h4>SOCIAL MEDIA</h4>
                <div className="box1">
                  <div className="d-flex">
                    <i className="fab fa-facebook-f"></i>
                    <span>FACEBOOK</span>
                  </div>
                </div>
                <div className="box2">
                  <div className="d-flex">
                    <i className="fab fa-twitter"></i>
                    <span>TWITTER</span>
                  </div>
                </div>
                <div className="box3">
                  <div className="d-flex">
                    <i className="fab fa-pinterest-p"></i>
                    <span>PINTEREST</span>
                  </div>
                </div>
                <div className="box4">
                  <div className="d-flex">
                    <i className="fab fa-linkedin-in"></i>
                    <span>LINKEDIN</span>
                  </div>
                </div>
              </div>
              <div className="boxes2">
                <div className="photo">
                  <img
                    width="100%"
                    src="https://k4j3j2s7.rocketcdn.me/cosmetsy/wp-content/uploads/2021/02/banner.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="boxes4">
                <h4>POPULAR POSTS</h4>
                {blogs &&
                  blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="d-flex"
                      style={{ marginTop: "10px" }}
                    >
                      <div className="image">
                        <img src={blog.picture} alt="" />
                      </div>
                      <div className="text">
                        <Link
                          to={"/blogdetail/" + blog.id}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <h3>{blog.name}</h3>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-9 col-12">
              {blogs &&
                blogs.map((e) => (
                  <div key={e.id} style={{ marginTop: "30px" }}>
                    <div className="image">
                      <img src={e.picture} alt="" />
                    </div>
                    <div className="text">
                      <div className="d-flex">
                        <p className="btn1">FEBRUARY 7, 2021</p>
                        <p className="btn1" style={{ color: "#F26A51" }}>
                          {" "}
                          - {e.tags} -{" "}
                        </p>
                        <p className="btn1">{e.style}</p>
                      </div>
                      <h2>{e.name}</h2>
                      <p>
                        Pellentesque feugiat, sem id interdum molestie, libero
                        nibh imperdiet velit, sodales elementum enim sem sed
                        lectus. Vivamus viverra diam congue tristique
                        pellentesque. Proin efficitur est vel lectus ultrices
                        rhoncus eu ut lacus. In gravida leo at justo lobortis,
                        vitae aliquet justo vehicula. Maecenas at facilisis ex.
                        Curabitur cursus, ex id efficitur ultrices, sapien
                        mauris sodales
                      </p>
                      <Link
                        to={"/blogdetail/" + e.id}
                        style={{ textDecoration: "none" }}
                      >
                        <span className="btn2">Read More</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
