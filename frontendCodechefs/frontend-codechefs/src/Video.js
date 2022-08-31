

const Video = () => {



    return (
        <div className="video-container">
            <div className="video-wrapper" >
                <video src="/video/cooking.mp4" autoPlay={true} muted={true} loop={true} >
                    Sorry, your browser doesn't support embedded videos.
                </video>

            </div>
        </div>
    )
}

export default Video