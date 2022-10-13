const News = () =>{
    return (
        <div>
            <div className="headline">
                <h1>Some good advices in the kitchen</h1>
            </div>
            <div className="news-container">
                <div className="news-card news-card1 ">

                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                        <h1>The fish won't stick to the pan with this trick.</h1>
                        <button className="news-button">Read</button>
                    </div>
                </div>
                <div className=" news-card news-card2">
                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                        <h1>Therefore, do not heat casseroles in the microwave.</h1>
                        <button className="news-button">Read</button>
                    </div>
                </div>
                <div className="news-card news-card3">
                    <div className="flip-card-front">
                    </div>
                    <div className="flip-card-back">
                        <h1>This is how to make the perfect and simple chocolate sauce.</h1>
                        <button className="news-button">Read</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default News;