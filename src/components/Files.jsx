import File from './File';

function Files({ files }) {
    return (
        <div className="files">
            <section className='quick-access'>
                <h2>Quick Access</h2>
                <div className="quick-access-files">
                    {files.quickAccess.map(file => (
                        <File imageSrc={file.imageSrc} logoSrc={file.logoSrc} title={file.title} info={file.info} />
                    ))}
                </div>
            </section>
            <section className='all-files'>
                <h2>Files</h2>
                <div className="all-files">
                    {files.allFiles.map(file => (
                        <File imageSrc={file.imageSrc} logoSrc={file.logoSrc} title={file.title} info={file.info} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Files;