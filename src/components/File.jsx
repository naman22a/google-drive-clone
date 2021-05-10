function File({ logoSrc, imageSrc, title, info }) {
    return (
        <div className='file'>
            <img src={imageSrc} className='img' />
            <div className="title">
                <img src={logoSrc} className='logo' />
                <h4>{title}</h4>
            </div>
            <p>{info}</p>
        </div>
    )
}

export default File;