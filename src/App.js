import hero_image from "./assets/illustration-hero.svg";
import music_icon from "./assets/icon-music.svg";

import "./App.css";

function App() {
    return (
        <div id="app" classNameName="main-content" style={{ height: "100vh" }}>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center my-5">
                        {/* <!-- card --> */}
                        <div className="card align-items-center col-sm-10 col-md-8 col-lg-6 col-xl-4 shadow-lg super-rounded img-fluid">
                            <img src={hero_image} alt="" className="card-img-top" />

                            <div className="card-body px-5">
                                {/* <!-- title --> */}
                                <h1 className="card-title text-center mt-4">Order Summary</h1>

                                {/* <!-- text --> */}
                                <p className="card-text text-center text-secondary my-3">
                                    You can now listen to millions of songs, audiobooks, and
                                    podcasts on any device anywhere you like!
                                </p>

                                {/* <!-- summary info --> */}
                                <div className="p-4 my-4 bg-light rounded d-flex align-items-center justify-content-around">
                                    {/* <!-- icon --> */}

                                    <div className="mr-2">
                                        <img
                                            src={music_icon}
                                            height="50px"
                                            width="50px"
                                            alt="music-icon"
                                        />
                                    </div>

                                    {/* <!-- payment summary --> */}

                                    <div className="align-items-center">
                                        <h6 className="small p-0">Annual Plan</h6>

                                        <p className="text-muted small align-self-bottom">
                                            $59.99/year
                                        </p>
                                    </div>

                                    {/* <!-- change plan button --> */}

                                    <button className="btn btn-link btn-sm fw-bold">Change</button>
                                </div>

                                <div className="d-grid gap-2 d-block">
                                    {/* <!-- pay button --> */}

                                    <button className="btn btn-primary btn-lg shadow-lg">
                                        Proceed to Payment
                                    </button>

                                    {/* <!-- cancel button  --> */}

                                    <button
                                        className="btn btn-link text-secondary fw-bold"
                                        style={{ "text-decoration": "none" }}>
                                        Cancel Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
