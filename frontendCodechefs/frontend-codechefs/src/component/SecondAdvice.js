import Header from "./Header";

const SecondAdvice = () => {
    return (
        <section>
            <Header/>
            <div className="advice-controller">
                <div className="description">
                    <h1>Therefore, do not heat casseroles in the microwave.</h1>
                    <br/>
                    <h2>
                        Some casseroles don't sell out on the day they're made, so they have to be reheated. And this is not so easy, but don't worry, the following tips will help.
                    </h2>

                    <br/>
                    <p>
                        Of course, we could ask, why multiply the word here, just simply throw the cubed casserole into the microwave and feed it properly. However, not all food behaves in the same way in the microwave.

                        In addition, since the heat is not evenly distributed in the microwave, we will have to leave the food inside for too long, until the inside is also heated through. During this time, there is a fear that the outside will burn (especially if there is cheese, sour cream or other dairy products on top).</p>
                </div>
                <div >
                    <img src="/news_img/news2.png" className="advice-img"/>
                </div>
            </div>
        </section>

    )
}

export default SecondAdvice;