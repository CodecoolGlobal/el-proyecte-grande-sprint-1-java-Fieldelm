import Header from "./Header";

const ThirdAdvice = () => {
    return (
        <section>
            <Header/>
            <div className="advice-controller">
                <div className="description">
                    <h1>This is how to make the perfect and simple chocolate sauce.</h1>
                    <br/>
                    <h2>
                        Chocolate fudge. The sauce that neither children nor adults can resist. The dressing, from which even the dressing is divine. The heavenly manna, which you can easily learn to make in just a few steps with the help of our daily tips.
                    </h2>

                    <br/>
                    <p>
                        Heat the butter and chocolate in a large saucepan, stir in the cocoa powder and sugar, then pour in milk, set aside a deciliter of it, and heat until it boils.
                        You can also use some home practices to prevent the chocolate sauce from becoming sticky. Pour the dressing into a bowl, then cover with aluminum foil, preferably so that there is not much air left between the dressing and the top of the bowl. It can also be helpful if you sprinkle the top of the pudding with a little sugar before it starts to form a skin, or pour a little more milk over the topping that has already been removed from the stove, and then mix it all well.
                      </p>
                </div>
                <div >
                    <img src="/news_img/news3.png" className="advice-img"/>
                </div>
            </div>
        </section>

    )
}

export default ThirdAdvice;