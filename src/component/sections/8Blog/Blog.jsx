import React, { useState } from "react";
import BlogBoxes, { blogImgs } from "./BlogBoxes";

function Blog() {



    const [actionTaken, setActionTaken] = useState("hideTheFlyDiv")

    function Showw() {
        setActionTaken("flyingDiv")
    }

    function hideTheAction() {
        setActionTaken("hideTheFlyDiv")

    }





    return (
        <div id="blog" className="blog-container">

            <hr />

            <div  className={actionTaken}>
                <div className="blogShower">

                    <div className="showImgs">
                        <img className="rainboitImg" src="https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg" alt="" />
                    </div>

                    <div className="showDescribtionss">

                        <div onClick={hideTheAction} className="closeDivs">
                            <img  className="closeIco" src="\img\closeIcon.svg" alt="" />
                        </div>

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">2 May, 2021</p>
                            {/* break */}

                            <h2 className="titleOfFlyingDescribtion">Digital Marketo to Their New Office.</h2>
                            <p className="md-typo-of-flying-describtion">Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                            {/* break */}

                            <h2 className="titleOfFlyingDescribtion">Nobis eleifend option conguenes.</h2>
                            <p className="md-typo-of-flying-describtion">Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.</p>
                            <p className="md-typo-of-flying-describtion">Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.</p>
                            {/* break */}

                            <h2 className="titleOfFlyingDescribtion">Mauris tempor, orci id pellentesque.</h2>
                            <p className="md-typo-of-flying-describtion">Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.</p>

                        </div>

                        <div className="comment-inner">
                            <h3 className="title mb--40 mt--50">Leave a Reply</h3>

                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="rnform-group"><input type="text" placeholder="Name" /></div>
                                        <div className="rnform-group"><input autoComplete="none" type="email" placeholder="Email" /></div>
                                        <div className="rnform-group"><input type="text" placeholder="Website" /></div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="rnform-group">
                                            <textarea placeholder="Comment"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        {/* <a class="rn-btn" href="#"><span>SUBMIT NOW</span></a> */}
                                        <button id="signUpBtn" className="btn likeBtn" type="submit">SUBMIT NOW</button>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>



            <div className="blog-header-container-l col-sm-3 col-md-6 col-lg-12">
                <p className="headerParagrafe">VISIT MY BLOG AND KEEP YOUR FEEDBACK</p>
                <h1 className="headerTitle">My Blog</h1>
            </div>
            <div className="portfolio-boxes">
                <BlogBoxes
                    show={Showw}
                    img={blogImgs.Canada}
                    listTitle="Canada"
                    time="2 min read"
                    title="T-shirt design is the part of design"
                />

                <BlogBoxes
                    show={Showw}
                    img={blogImgs.development}
                    listTitle="development"
                    time="5 hour read"
                    title="The services provide for design "
                />

                <BlogBoxes
                    show={Showw}
                    img={blogImgs.Application}
                    listTitle="Application"
                    time="5 min read"
                    title="Mobile app landing design & app maintain"
                />
            </div>
        </div>
    )
}

export default Blog;