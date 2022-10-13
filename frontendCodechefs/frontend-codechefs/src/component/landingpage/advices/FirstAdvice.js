import Header from "../Header";

const FirstAdvice = () => {
    return (
        <section>
            <Header/>
            <div className="advice-controller">
                <div className="description">
                    <h1>The fish won't stick to the pan with this trick</h1>
                    <br/>
                    <h2>
                        You can also fry fish in a pan easily and simply, the problem only starts when the skin part sticks
                        to the bottom of the pan... With our daily tip, you can avoid this inconvenience, and you only need
                        one thing!
                    </h2>

                    <br/>
                    <p>
                        If you don't want to scrape the bottom of the pan and want the skin of the fish to cook nicely
                        and evenly without sticking, take out a piece of parchment paper!

                        The baking paper placed in the pan prevents the fish from sticking to the dish, so washing up
                        becomes less of a problem, and the your fish cooks just as delicious and crispy as if you didn't
                        use paper.</p>
                </div>
                <div >
                    <img src="/news_img/news1.png" className="advice-img"/>
                </div>
            </div>
        </section>

    )
}

export default FirstAdvice;