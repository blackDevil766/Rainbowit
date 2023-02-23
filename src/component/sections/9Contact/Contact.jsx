import React from "react";

function Contact() {
    return (
        <div id="contact">
            <hr />

            <div className="blog-header-container-l col-sm-3 col-md-6 col-lg-12">
                <p className="headerParagrafe">CONTACT</p>
                <h1 className="headerTitle">Contact With Me</h1>
            </div>

            <div className="contact-container">
                <div className="left-contact" >
                    <div className="testimonal-img-container">
                        <img className="contact-img" src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" alt="" />
                    </div>
                    {/* <p className="card-Header"></p> */}
                    <h3 className="Cards-title">Nevine Acotanza</h3>
                    <p className="contact-describtion">Chief Operating Officer</p>

                    <div className="description1">
                        <p>I am available for freelance work. Connect with me via and call in to my account.
                        </p>
                        <span className="phone"> Phone: <a href="tel:01941043264">+01234567890</a></span>
                        <span className="mail">Email: <a href="mailto:admin@example.com">admin@example.com</a></span>
                    </div>

                    <div className="social-area">
                        <div className="name">FIND WITH ME</div>
                        <div className="social-icone">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                    </div>

                </div>

                <div className="right-contact">
                    <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="contact-name">Your Name</label>
                                <input  name="contact-name" id="contact-name" type="text" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input  name="contact-phone" type="text" />
                            </div> 
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="contact-email">Email</label>
                                <input  name="contact-email" type="email" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="subject">subject</label>
                                <input  name="subject" type="text" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label for="contact-message">Your Message</label>
                                <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className="contact-btn col-lg-12">
                            <button name="submit" type="submit" id="submit" className="rn-btn">
                                <span>SEND MESSAGE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;