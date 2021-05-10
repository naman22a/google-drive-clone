// COMPONENTS
import Files from '../components/Files';

// SCSS
import '../scss/home.scss';

function Home() {

    const files = {
        quickAccess: [{
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fencoresky.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F04%2Freact-js.jpg&f=1&nofb=1",
            title: "React JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fswansoftwaresolutions.com%2Fwp-content%2Fuploads%2F2020%2F01%2FBenefits-of-Using-VUE.JS-1024x576.jpeg&f=1&nofb=1",
            title: "Vue JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.vilmatech.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fsvelte-review.jpg&f=1&nofb=1",
            title: "Svelte JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        }
        ],
        "allFiles": [{
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.webdevelopmenthelp.net%2Fwp-content%2Fuploads%2F2015%2F09%2FHTML55.png&f=1&nofb=1",
            title: "HTML",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.document"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.markupbox.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F05%2Fcss3.jpg&f=1&nofb=1",
            title: "CSS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/application/pdf"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dmdr9kc0T5LDSpTj3MEdOAHaDZ%26pid%3DApi&f=1",
            title: "JS",
            info: "You opened past week",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fencoresky.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F04%2Freact-js.jpg&f=1&nofb=1",
            title: "React JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fswansoftwaresolutions.com%2Fwp-content%2Fuploads%2F2020%2F01%2FBenefits-of-Using-VUE.JS-1024x576.jpeg&f=1&nofb=1",
            title: "Vue JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        },
        {
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.vilmatech.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fsvelte-review.jpg&f=1&nofb=1",
            title: "Svelte JS",
            info: "You shared this past month",
            logoSrc: "https://drive-thirdparty.googleusercontent.com/32/type/video/mp4"
        }
        ]
    };

    return (
        <div className='content'>
            <div className="nav">
                <div className="logo">
                    <h1>My Drive</h1>
                    <svg className="a-s-fa-Ha-pa" width="20px" height="20px" viewBox="0 0 20 20" focusable="false" fill="#000000"><polygon points="8,5 13,10 8,15"></polygon></svg>
                </div>
                <svg className="a-s-fa-Ha-pa hover" width="24px" height="24px" viewBox="0 0 24 24" focusable="false" fill="#000000">
                    <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"></path>
                </svg>
                <svg className='hover' width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
                </svg>
            </div>

            {files && <Files files={files} />}
        </div>
    )
}

export default Home;
