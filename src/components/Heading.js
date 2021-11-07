import React from "react";

class Heading extends React.Component {
    render() {
        return(
            <section className="heading">
                <div className="mask"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-6 col-lg-4 big-logo">
                            <img src="./img/gastro-logo.png" alt="pizza-gastro"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 headtext">
                            <p>Тісто замішуємо з італійського борошна «5 stagioni tipo 00 per pizza Napoletana».
                                Соус готуємо з італійських томатів «Pelati Rosso». Додаємо виключно справжню моцареллу та інгрідієнти вищого гатунку.
                                Рецептуру вдосконалюємо з 2010-го року
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Heading