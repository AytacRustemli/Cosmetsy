import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/config";
import "./duis.scss";

const Duis = () => {

  const {id} = useParams();
  const [products,setProducts] = useState([]);


  const getBlogs = async () => {
    await fetch(BASE_URL + "blog/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <section id="duis">
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
              <div className="boxes3">
                <h4>TAGS</h4>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box1">
                      <p>beauty</p>
                    </div>
                  </div>
                  <div className="col-lg-4" style={{ marginLeft: "-10px" }}>
                    <div className="box1">
                      <p>cosmetic</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box1">
                      <p>envato</p>
                    </div>
                  </div>
                  <div className="col-lg-4" style={{ marginLeft: "-7px" }}>
                    <div className="box1">
                      <p>klbtheme</p>
                    </div>
                  </div>
                  <div className="col-lg-4" style={{ marginLeft: "7px" }}>
                    <div className="box1">
                      <p>online</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box1">
                      <p>shop</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxes6">
                <h4>POPULAR POSTS</h4>
                <div className="d-flex">
                  <div className="image">
                    <img
                      src="https://k4j3j2s7.rocketcdn.me/cosmetsy/wp-content/uploads/2021/02/index-47-150x150.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h3>
                      The 7 Best Bikini Trimmers to Get Ready for Swimsuit
                      Season
                    </h3>
                  </div>
                </div>
                <div className="d-flex" style={{ marginTop: "20px" }}>
                  <div className="image">
                    <img
                      src="https://k4j3j2s7.rocketcdn.me/cosmetsy/wp-content/uploads/2021/02/index-46-150x150.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h3>
                      But I must explain to you how all this mistaken idea
                    </h3>
                  </div>
                </div>
                <div className="d-flex" style={{ marginTop: "20px" }}>
                  <div className="image">
                    <img
                      src="https://k4j3j2s7.rocketcdn.me/cosmetsy/wp-content/uploads/2021/02/index-48-150x150.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h3>
                      On the other hand we provide denounce with righteous
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="image">
                <img
                  src={products.picture}
                  alt=""
                />
              </div>
              <div className="text">
                <div className="d-flex">
                  <p className="btn1">FEBRUARY 7, 2021</p>
                  <p className="btn1" style={{ color: "#F26A51" }}>
                    - {products.style} -
                  </p>
                  <p className="btn1">{products.tags}</p>
                </div>
                <h2>
                  {products.name}
                </h2>
                <p>
                  Pellentesque feugiat, sem id interdum molestie, libero nibh
                  imperdiet velit, sodales elementum enim sem sed lectus.
                  Vivamus viverra diam congue tristique pellentesque. Proin
                  efficitur est vel lectus ultrices rhoncus eu ut lacus. In
                  gravida leo at justo lobortis, vitae aliquet justo vehicula.
                  Maecenas at facilisis ex. Curabitur cursus, ex id efficitur
                  ultrices, sapien mauris sodales
                </p>
                <p>
                  Aenean cursus dignissim nibh, eget tempor nisi sagittis at.
                  Pellentesque convallis sapien dolor. Quisque ac turpis vitae
                  eros aliquam interdum sit amet quis nisi. Morbi ut pulvinar
                  orci. Aliquam ac mi nisi. Nulla mollis mauris augue, quis
                  dapibus felis venenatis eu. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; In at
                  ipsum vitae elit blandit bibendum in nec libero. Duis nec
                  semper massa. Aenean lacinia lacus eu nisi mattis vestibulum
                  in et quam. Curabitur tortor est, facilisis quis libero id,
                  rhoncus pretium ipsum. Aliquam massa dui, mattis ac facilisis
                  sed, aliquam sed enim.
                </p>
                <p>
                  Duis cursus aliquet quam a aliquam. In sollicitudin elit
                  augue, sed vulputate sapien vehicula et. Phasellus turpis
                  sapien, sodales ut tortor vitae, bibendum molestie erat. Sed
                  id posuere arcu, vitae vestibulum sapien. Sed nisi dui,
                  lobortis at porttitor vel, semper in felis. Donec sit amet
                  sodales ligula. Suspendisse sapien nunc, consequat a efficitur
                  eget, fringilla a elit. Praesent aliquam, justo et mollis
                  aliquam, tortor quam iaculis lorem, nec sagittis enim arcu in
                  urna.
                </p>
                <div className="text1">
                  <h5>
                    Aliquam purus enim, fringilla vel nunc imperdiet, consequat
                    ultricies massa. Praesent sed turpis sollicitudin, dignissim
                    justo vel, fringilla mi.
                  </h5>
                </div>
                <p>
                  Donec justo tellus, hendrerit ut congue quis, tincidunt in
                  leo. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Mauris orci sapien,
                  porttitor et luctus sed, fringilla et felis. Vivamus accumsan
                  sapien sed turpis luctus, vel facilisis diam lobortis. Ut
                  gravida vulputate ligula sit amet euismod. Duis vestibulum
                  nunc a erat feugiat maximus. Nunc sit amet arcu lacinia,
                  sollicitudin lectus id, fermentum risus. Aliquam sed mattis
                  dolor. In ac dolor rutrum, feugiat mauris non, tempus nunc.
                </p>
                <ul>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    <span>List Style</span>
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                </ul>
                <p>
                  Vivamus vulputate metus ex, lacinia rhoncus urna luctus ac.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eget tellus id nibh aliquam tincidunt eu sed justo.
                  Quisque et sagittis est. Nam vitae ornare magna, a scelerisque
                  sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Fusce odio dolor, facilisis
                  sit amet nisl ut, rhoncus cursus mauris. Duis porta urna elit.
                </p>
                <h4>Ut at mi sed velit condimentum porta</h4>
                <p>
                  Vestibulum ac volutpat tellus. Etiam in est commodo,
                  pellentesque nunc sed, porttitor ligula. In in est varius,
                  feugiat massa id, volutpat dui. Integer rhoncus egestas erat,
                  eget condimentum augue ultrices nec. Proin posuere ultricies
                  dictum. Fusce vehicula eu mauris vitae egestas. Donec
                  placerat, augue vitae lobortis consequat, ante sem auctor
                  turpis, sed facilisis orci quam eget est. Nullam at erat
                  varius, tempus dui non, molestie turpis. Sed ac tempor sapien.
                  Fusce ultricies, dolor vel fringilla porttitor, mauris lectus
                  consectetur erat, sed egestas augue tellus id sem. Integer vel
                  auctor dui. Maecenas eleifend, mi quis tincidunt varius,
                  mauris neque suscipit ligula, nec semper odio tellus at lacus.
                  Cras bibendum odio a massa volutpat condimentum a in leo.
                  Donec eu leo nunc.
                </p>
                <ol>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    <span>List Style</span>
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    <span>List Style</span>
                  </li>
                  <li>
                    <span>List Style</span>
                  </li>
                  <li>
                    <p>List Style</p>
                  </li>
                </ol>
                <p>
                  Quisque massa ligula, fermentum vitae velit ut, maximus
                  bibendum dolor. Nulla quis mi ante. Suspendisse luctus dolor
                  vitae volutpat pulvinar. Vivamus tempus fringilla tortor sit
                  amet ornare. Nunc porttitor dolor lorem, eu consequat ligula
                  scelerisque fringilla. Nunc vel justo imperdiet odio pulvinar
                  fringilla id nec nisi. Pellentesque cursus eros vitae felis
                  facilisis congue.
                </p>
                <p>
                  Donec feugiat tincidunt eros, ac aliquam purus egestas
                  condimentum. Curabitur imperdiet at leo pellentesque mattis.
                  Fusce a dignissim est. In enim nisi, hendrerit placerat nunc
                  quis, porttitor lobortis neque. Donec nec nulla arcu. Proin
                  felis augue, volutpat ac nunc a, semper egestas dolor. Sed
                  varius magna non lacus viverra, at dapibus sem interdum. Proin
                  urna nibh, maximus nec interdum ut, hendrerit et arcu. Nunc
                  venenatis eget nulla at tempor. Duis sed tellus placerat,
                  bibendum felis quis, efficitur nisi. Morbi porta placerat urna
                  et pharetra. Proin condimentum, libero ac feugiat efficitur,
                  est orci consectetur sapien, a pretium leo leo in elit.
                  Quisque fringilla finibus arcu, pretium posuere urna posuere
                  sit amet. Nullam quis sapien a augue aliquet accumsan eget eu
                  risus. Ut at mi sed velit condimentum porta. Proin vestibulum
                  congue ullamcorper.
                </p>
                <p>
                  Nunc blandit ligula mi, quis commodo dolor fermentum sit amet.
                  Nam vehicula pharetra lacus a vulputate. Duis pulvinar
                  vestibulum dolor, vel commodo arcu laoreet ac. Vestibulum sed
                  consequat purus, vitae auctor metus. Duis ut aliquet odio, at
                  tincidunt nunc. Vestibulum dignissim aliquet orci, rutrum
                  malesuada ipsum facilisis vel. Morbi tempor dignissim nisi.
                  Maecenas scelerisque maximus justo eget sodales. Sed finibus
                  consectetur vulputate. Pellentesque id pellentesque nulla. Sed
                  ut viverra eros. Vestibulum ut ligula quam.
                </p>
                <h6>
                  3 thoughts on “The 7 Best Bikini Trimmers to Get Ready for
                  Swimsuit Season”
                </h6>{" "}
                <hr />
              </div>
              <div class="text2">
                <div class="d-flex">
                  <img
                    src="https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=96d=mmr=g"
                    alt=""
                  />
                  <div class="text3">
                    <h5>admin</h5>
                    <span>February 20, 2021</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="text2">
                <div class="d-flex">
                  <img
                    style={{ marginLeft: "30px" }}
                    src="https://secure.gravatar.com/avatar/f628c5b49f26cd06cdc100a94fbe27d0?s=96d=mmr=g"
                    alt=""
                  />
                  <div class="text3">
                    <h5>Jeffrey T. Kelly</h5>
                    <span>February 21, 2021</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="text2">
                <div class="d-flex">
                  <img
                    src="https://secure.gravatar.com/avatar/f628c5b49f26cd06cdc100a94fbe27d0?s=96d=mmr=g"
                    alt=""
                  />
                  <div class="text3">
                    <h5>Elliot Alderson</h5>
                    <span>February 21, 2021</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="boxes4">
                <h4>LEAVE A REPLY</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <h6>Comment *</h6>
                <textarea class="contact-input"></textarea>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="text5">
                      <h6>Name *</h6>
                      <form>
                        <input class="contact-input" type="text" />
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="text4">
                      <h6>Email *</h6>
                      <form>
                        <input class="contact-input" type="email" />
                      </form>
                    </div>
                  </div>
                </div>
                <div class="boxes5">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                  />
                  <label for="wp-comment-cookies-consent">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <div class="boxes6">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    class="submit"
                    value="Post Comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Duis;
