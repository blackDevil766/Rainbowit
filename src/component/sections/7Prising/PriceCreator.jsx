import React from "react";

function PriceList(props) {

    function Wrapper(props) {
        return (
            <div className="check">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <p>{props.text}</p>
            </div>
        )
    }

    return (
        <div className="price-sections-container" style={{opacity: props.opacityy, position: props.positions}}>
            <div className="pricing-header">
                <div className="price-left">
                    <h2 className="pricing-title">{props.title}</h2>
                    <span>Elementor</span>
                </div>

                <div className="price-right">
                    <span>{props.price}</span>
                </div>

            </div>

            <div className="pricing-body">
                <p className="discription">{props.describ}</p>

                <div className="check-wrapper">

                    <div className="left-area">
                        <Wrapper text="1 Page with Elementor" />
                        <Wrapper text="Design Customization" />
                        <Wrapper text="Responsive Design" />
                        <Wrapper text="Content Upload" />
                        <Wrapper text="Design Customization" />
                        <Wrapper text="2 Plugins/Extensions" />
                    </div>

                    <div className="right-area">
                        <Wrapper text="multipage Elementor" />
                        <Wrapper text="Design Figma" />
                        <Wrapper text="MAintaine Design" />
                        <Wrapper text="Content Upload" />
                        <Wrapper text="Design With XD" />
                        <Wrapper text="8 Plugins/Extensions" />
                    </div>

                </div>
            </div>

            <div className="price-footer">

                <button className="price-orderNow">
                    <a href="#"><span>order now</span></a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="order-ico-arrow feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>

                <div class="time-line d-flex">
                    <div class="single-cmt d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>2 Days Delivery</span>
                    </div>
                    <div class="single-cmt d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        <span>Unlimited Revission</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PriceList;