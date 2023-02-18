import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            
         {/* <!-- aside dropdown start--> */}
        <div className="aside-dropdown">
            <div className="aside-dropdown__inner"><span className="aside-dropdown__close">
                <svg className="icon">
                    <use href="#close" xlinkHref="#close"></use>
                </svg></span>
            <div className="aside-dropdown__item d-lg-none d-block">
                <ul className="aside-menu">
                    <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><a className="aside-menu__link" href="mono/front_3.html"><span>Home</span></a>
                        
                    </li>
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Pages</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                            <li><a href="about.html"><span>About</span></a></li>
                            <li><a href="typography.html"> <span>Typography</span></a></li>
                            <li><a href="donors.html"><span>Donors & Partners</span></a></li>
                            <li><a href="volunteer.html"><span>Become a Volunteer</span></a></li>
                            <li><a href="events.html"><span>Events</span></a></li>
                            <li><a href="event-details.html"><span>Event Details</span></a></li>
                            <li><a href="stories.html"><span>Stories</span></a></li>
                            <li><a href="story-details.html"><span>Story Details</span></a></li>
                            <li><a href="blog.html"><span>Blog</span></a></li>
                            <li><a href="blog-post.html"><span>Blog Post</span></a></li>
                            <li><a href="gallery.html"><span>Gallery</span></a></li>
                            <li><a href="pricing.html"><span>Pricing Plans</span></a></li>
                            <li><a href="faq.html"><span>FAQ</span></a></li>
                            <li><a href="404.html"><span>404 Page</span></a></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Causes</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                            <li><a href="causes.html"><span>Causes 1</span></a></li>
                            <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                            <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                            <li><a href="cause-details.html"><span>Cause Details</span></a></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Shop</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                            <li><a href="shop.html"><span>Catalog Page</span></a></li>
                            <li><a href="shop-product.html"><span>Shop Product</span></a></li>
                            <li><a href="shop-cart.html"><span>Shop Cart</span></a></li>
                            <li><a href="shop-checkout.html"><span>Shop Checkout</span></a></li>
                            <li><a href="shop-account.html"><span>Shop Account</span></a></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                    <li className="aside-menu__item"><a className="aside-menu__link" href="contacts.html"><span>Contacts</span></a></li>
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Elements</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                            <li><a href="alerts.html"><span>Alerts</span></a></li>
                            <li><a href="team.html"><span>Team</span></a></li>
                            <li><a href="testimonials.html"><span>Testimonials</span></a></li>
                            <li><a href="accordion.html"><span>Accordion</span></a></li>
                            <li><a href="tabs.html"><span>Tabs</span></a></li>
                            <li><a href="pricing-plan.html"><span>Pricing Plan</span></a></li>
                            <li><a href="counters.html"><span>Counters</span></a></li>
                            <li><a href="icons.html"><span>Icons</span></a></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                </ul>
            </div>
            <div className="aside-dropdown__item">
                {/* <!-- aside menu start--> */}
                <ul className="aside-menu">
                    <li className="aside-menu__item"><a className="aside-menu__link" href="#">Documents</a></li>
                    <li className="aside-menu__item"><a className="aside-menu__link" href="#">Information</a></li>
                    <li className="aside-menu__item"><a className="aside-menu__link" href="#">Additional Pages</a></li>
                    <li className="aside-menu__item"><a className="aside-menu__link" href="#">Elements</a></li>
                    <li className="aside-menu__item"><a className="aside-menu__link" href="#">Contacts</a></li>
                </ul>
                {/* <!-- aside menu end--> */}
                <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href="mailto:support@helpo.org">support@helpo.org</a></div>
                <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span><a className="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a></div>
                <ul className="aside-socials">
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donate</span></a></div>
            </div>
        </div>
        {/* <!-- aside dropdown end--> */}
        {/* <!-- top bar start--> */}
        <div className="top-bar d-none d-lg-block">
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-lg-9"><a className="top-bar__link" href="front_3.html">Home</a><a className="top-bar__link" href="contacts.html">Contact</a><a className="top-bar__link" href="mailto:support@helpo.org"></a></div>
                    <div className="col-lg-3 text-right">
                        <ul className="socials">
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- top bar end--> */}
        {/* <!-- header start--> */}
        <div className="header header--front_3">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-none d-sm-block">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                        <div className="header-logo">
                       <Link to="/" className="header-logo__link">
                        <span>
                            <img className="header-logo__img" src="assets/img/logo_dark.png" alt="logo" />
                            </span>
                            </Link>
                            </div>
                    </div>
                    <div className="col-auto">
                        {/* <!-- main menu start--> */}
                        <nav>
                            <ul className="main-menu">
                            
                                <li className="main-menu__item main-menu__item--has-child"><Link to="/about" className="main-menu__link"><span>About</span></Link>
                                    {/* <!-- sub menu start--> */}
                                    <ul className="main-menu__sub-list sub-list--style-2">
                                        <li><Link to="/mission"><span>Mission</span></Link></li>
                                        <li><Link to="/vision"><span>Vision</span></Link></li>
                                        <li> <Link to="/goal"><span>Goal</span></Link></li>
                                        <li> <Link to="/objectives"><span>Objectives</span></Link></li>
                                        <li> <Link to="/work_plan"><span>Work Plan</span></Link></li>
                                        <li><Link to="/executive"><span>Executive</span></Link></li>
                                    </ul>
                                    {/* <!-- sub menu end--> */}
                                </li>
                                <li className="main-menu__item"><Link to="/activities" className="main-menu__link"><span>Activities</span></Link>

                                </li>

                                <li className="main-menu__item main-menu__item--has-child"><Link to="" className="main-menu__link" ><span>Project</span></Link>
                                    {/* <!-- sub menu start--> */}
                                    <ul className="main-menu__sub-list">
                                        <li><Link to="/ongoing"><span>Ongoing</span></Link></li>
                                        <li> <Link to="/upcoming"><span>Upcoming</span></Link></li>
                                        <li><Link to="/completed"><span>Completed</span></Link></li>
                                    </ul>
                                    {/* <!-- sub menu end--> */}
                                </li>
                                <li className="main-menu__item"><Link to="/communities" className="main-menu__link"><span>Communities</span></Link>

                                </li>
                                <li className="main-menu__item"><Link to="/events" className="main-menu__link"><span>News & Events</span></Link>

                                </li>
                                <li className="main-menu__item"><Link to="/gallery" className="main-menu__link"><span>Gallery</span></Link>

                                </li>

                            </ul>
                        </nav>
                        {/* <!-- main menu end--> */}
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        {/* <!-- lang select start--> */}
                        <ul className="lang-select">
                            <li className="lang-select__item lang-select__item--active"><span>En</span>
                                <ul className="lang-select__sub-list">
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Deutsch</a></li>
                                    <li><a href="#">Russian</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <!-- lang select end--> */}
                        <Link to="/membership" className="button button--squared"><span>Membership</span></Link>
                        
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;