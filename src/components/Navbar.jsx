// IMAGES
import searchSvg from '../svg/search.svg';
import supportSvg from '../svg/support.svg';
import googleApps from '../svg/google-apps.png';

// SCSS
import '../scss/navbar.scss';

function Navbar() {

    return (
        <div className='navbar'>
            <div className="logo">
                <img className="gb_uc gb_7d" src="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" srcSet="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png 1x, //ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png 2x " alt="" aria-hidden="true" />
                <h2>Drive</h2>
            </div>
            <div className="search-box">
                <img src={searchSvg} className='hover' />
                <input type="text" placeholder='Search in Drive' />
            </div>
            <div className="right">
                <div>
                    <img src={supportSvg} id="support" className='hover' />
                    <div className="h-sb-Ic h-R-d a-vu-w-d a-c-d hover" role="button" aria-expanded="false" tabIndex="0" aria-haspopup="true" data-tooltip="Settings" aria-label="Settings" data-tooltip-align="b,c" data-tooltip-delay="500" data-tooltip-unhoverable="true"><div className="a-d-c"><svg className=" a-s-fa-Ha-pa" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg></div></div>
                </div>
                <div>
                    <div className="hover" id="google-apps-bg">
                        <img id='google-apps' src={googleApps} />
                    </div>
                    <img className="gb_Da gbii" src="https://lh3.googleusercontent.com/ogw/ADGmqu9EeTcleiEEsjo1reKO9T-RQvuhH6oFg7YfVTat=s32-c-mo" srcSet="https://lh3.googleusercontent.com/ogw/ADGmqu9EeTcleiEEsjo1reKO9T-RQvuhH6oFg7YfVTat=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADGmqu9EeTcleiEEsjo1reKO9T-RQvuhH6oFg7YfVTat=s64-c-mo 2x " alt="" aria-hidden="true" data-noaft="" id='profile-img' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
