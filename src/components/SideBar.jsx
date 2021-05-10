import { useState } from "react";

// SCSS
import '../scss/sidebar.scss';

// SVG COMPONENTS
import MyDrive from './svg/MyDrive';
import Triangle from './svg/Triangle';
import SharedWithMeSvg from './svg/SharedWithMe';
import Time from './svg/Time';
import Star from './svg/Star';
import Trash from './svg/Trash';
import Storage from './svg/Storage';

function SideBar() {

    const [myDrive, setMyDrive] = useState(true);
    const [shared, setShared] = useState(false);
    const [recent, setRecent] = useState(false);
    const [star, setStar] = useState(false);
    const [trash, setTrash] = useState(false);
    const [storage, setStorage] = useState(false);

    return (
        <div className='sidebar'>
            <button className='new-btn'>
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
                <span>New</span>
            </button>

            <div className="sidebar-nav">
                <div
                    className={myDrive ? 'nav-item active' : 'nav-item'}
                    onClick={() => setMyDrive(!myDrive)}>
                    <Triangle />
                    <MyDrive />
                    <h3 className='title'>My Drive</h3>
                </div>
                <div
                    className={shared ? 'nav-item active' : 'nav-item'}
                    onClick={() => setShared(!shared)}>
                    <SharedWithMeSvg />
                    <h3 className='title'>Shared with me</h3>
                </div>
                <div
                    className={recent ? 'nav-item active' : 'nav-item'}
                    onClick={() => setRecent(!recent)}>
                    <Time />
                    <h3 className='title'>Recent</h3>
                </div>
                <div
                    className={star ? 'nav-item active' : 'nav-item'}
                    onClick={() => setStar(!star)}>
                    <Star />
                    <h3 className='title'>Starred</h3>
                </div>
                <div
                    className={trash ? 'nav-item active' : 'nav-item'}
                    onClick={() => setTrash(!trash)}>
                    <Trash />
                    <h3 className='title'>Trash</h3>
                </div>
                <hr />
                <div
                    className={storage ? 'nav-item active' : 'nav-item'}
                    onClick={() => setStorage(!storage)}>
                    <Storage />
                    <h3 className='title'>Storage</h3>
                </div>
            </div>
            <div className='progress-container'>
                <div className='progress-bar'></div>
            </div>
            <p>1.1 GB of 15 GB used</p>
            <button>Buy Storage</button>
        </div>
    )
}

export default SideBar;
