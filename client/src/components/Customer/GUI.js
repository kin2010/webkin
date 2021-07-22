import React from 'react';
import Content from './Content/Content.js'

import { AuthContext } from '../../Context/AuthProvider'
import { auth } from '../../Firebase/Config'
import Te from './Content/Slideshow/Te'
export default function GUI() {
    const { isLogin, setIsLogin, history } = React.useContext(AuthContext)
    const clickLogin = () => {
        console.log("ok")
        console.log(isLogin)
        if (isLogin) {
            //dang xuat
            auth.signOut();
            setIsLogin(false)
            history.push('/login')
        }
        else {
            // dang nhap
            history.push('/login')
        }
    }
   
    return (

        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img id="fun" src="/template/images/fun.png" alt="cc" />
                        Hello Proooooo
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#content" className="nav-link smoothScroll">Story</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link smoothScroll">Xàm</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link">Info</a>
                            </li>
                            <li className="nav-item">
                                <a href="/blog" className="nav-link contact">My Blog</a>
                            </li>
                            <li className="nav-item">
                                <div onClick={() => clickLogin()} className="nav-link">{isLogin === true ? "Đăng xuất" : "Đăng nhập"}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="hero hero-bg d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="hero-text">
                                <h1 className="text-white" data-aos="fade-up">"Những thèn đẹp trai thường không đăng ảnh lên mạng xã hội"</h1>
                                <a href="#content" className="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay={100}>" kin xàm xí "</a>
                                <strong className="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay={200}><i className="fa fa-phone mr-2" /> +0333 428 ***</strong>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="hero-image" data-aos="fade-up" data-aos-delay={300}>
                                <img src="/template/images/ava.jpg" className="img-fluid" alt="working girl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about section-padding pb-0" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto col-md-10 col-12">
                            <div className="about-info">
                                <h2 className="mb-4" data-aos="fade-up">Đây là   Web <strong> XÀM XÀM </strong>của <strong>Kin</strong> </h2>
                                <p className="mb-0" data-aos="fade-up"> <a href="blog.html">My Blog   ,  </a>  <a href="project-detail.html"> Facebook </a> ,  <a href="contact.html">Instagram</a> page.
                                    <br /><br /><strong>Nhận solo mọi kèo ya sua :v</strong> </p>
                            </div>
                            <div className="about-image" data-aos="fade-up" data-aos-delay={200}>
                                <img src="/template/images/ys.jpg  " className="img-fluid" alt="office" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact */}

            <section className="contact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">
                            <h1 className="mb-4">Here <strong>!</strong> ! <strong>....</strong> !</h1>
                            {/* <p>or email us at <a href="mailto:hello@company.com">hello@company.com</a></p>
                <p>Please follow our <a rel="nofollow" href="https://templatemo.com/contact">contact page</a> to <strong>setup</strong> the contact form.</p> */}
                        </div>
                             {/* Follow https://templatemo.com/contact page to setup your own contact form */}
                        {/* <div className="col-lg-8 mx-auto col-md-10 col-12">
                       
                            <form action="/api" method="post" className="contact-form" data-aos="fade-up" data-aos-delay={300} role="form">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" className="form-control" name="name" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <input type="email" className="form-control" name="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <textarea className="form-control" rows={6} name="message" placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className="col-lg-5 mx-auto col-7">
                                        <button type="submit" className="form-control" id="submit-button" name="submit" onClick={() => clickMessage()}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </section>


            {/* <div className="google-map" data-aos="zoom-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3214782708783!2d108.20332271824797!3d15.839817251017793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314205dbffffffff%3A0x7087edf03e52b04b!2zVHLGsOG7nW5nIFRIUFQgUEjhuqBNIFBIw5ogVEjhu6g!5e1!3m2!1svi!2s!4v1625540074413!5m2!1svi!2s" width={1920} height={600} frameBorder={0} style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>

            </div> */}







            <section className="project section-padding" id="project">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            {/* <h2 className="mb-3 text-center" data-aos="fade-up">
                                  <p className="chuyen"> Hãy lắng nge những câu chuyện nhọ</p>
                                    <strong>Quà tặng cột sống</strong>
                                </h2>
                                <div className="owl-carousel owl-theme" id="project-slide">
                                    <div className="item project-wrapper" data-aos="fade-up" data-aos-delay={100}>
                                        <img src="/template/images/xam/1.jpg" className="img-fluid" alt="project image" />
                                       
                                    </div>
                                    <div className="item project-wrapper" data-aos="fade-up">
                                        <img src="/template/images/xam/2.jpg" className="img-fluid" alt="project image" />
                                      
                                    </div>
                                    <div className="item project-wrapper" data-aos="fade-up">
                                        <img src="/template/images/xam/3.jpg" className="img-fluid" alt="project image" />
                                        
                                    </div>
                                    <div className="item project-wrapper" data-aos="fade-up">
                                        <img src="/template/images/xam/6.jpg" className="img-fluid" alt="project image" />
                                       
                                    </div>
                                    <div className="item project-wrapper" data-aos="fade-up">
                                        <img src="/template/images/xam/5.jpg" className="img-fluid" alt="project image" />
                                       
                                    </div>
                                </div> */}
                            <h2 className="mb-3 text-center" data-aos="fade-up">
                                <p className="chuyen"> Hãy lắng nge những câu chuyện nhọ</p>
                                <strong className="str">Quà tặng cột sống</strong>
                            </h2>
                            <Te />
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial section-padding" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-12">
                            <div className="contact-image" data-aos="fade-up">
                                <img id="imgkin" src="/template/images/kinzia.jpg" className="img-fluid" alt="website" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 col-12">
                            <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay={100}>My info</h4>
                            <div className="quote" data-aos="fade-up" data-aos-delay={200} />
                            <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>aduvippppppp</h2>
                            <p data-aos="fade-up" data-aos-delay={400}>
                                <strong>Update sau</strong>
                                <span className="mx-1">/</span>
                                <small>By  <strong>Kin</strong></small>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Content />
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
                            <h1 className="text-white" data-aos="fade-up" data-aos-delay={100}>Pro <strong>Player</strong> zzz.</h1>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay={200}>
                            <h4 className="my-4">Contact Info</h4>
                            <p className="mb-1">
                                <i className="fa fa-phone mr-2 footer-icon" />
                                +99 080 070 4224
                            </p>
                            <p>
                                <a href="#">
                                    <i className="fa fa-envelope mr-2 footer-icon" />
                                    hello@company.com
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay={300}>
                            <h4 className="my-4">Our Studio</h4>
                            <p className="mb-1">
                                <i className="fa fa-home mr-2 footer-icon" />
                                QN
                            </p>
                        </div>
                        <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay={400}>
                            <p className="copyright-text">Copyright © 2020 Your Company
                                <br />
                                <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
                        </div>
                        <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay={500}>
                            <ul className="footer-link">
                                <li><a href="#">Stories</a></li>
                                <li><a href="#">Work with us</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay={600}>
                            <ul className="social-icon">
                                <li><a href="#" className="fa fa-instagram" /></li>
                                <li><a href="#" className="fa fa-twitter" /></li>
                                <li><a href="#" className="fa fa-dribbble" /></li>
                                <li><a href="#" className="fa fa-behance" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );

}