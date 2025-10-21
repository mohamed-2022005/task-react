import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {

    useEffect(() => {
        Aos.init({ duration: 1800 }); 
    }, []);

    return (
        // Start header home page

        <header>
            <div data-aos="fade-right" data-odata-aos-delay="200"className="left-side">
                <h2>Body Mass Index Calculator</h2>
                <img src="" alt="" />
                <p>
                    Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                    While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate 
                    your overall health and well-being.
                </p>
            </div>

            <div data-aos="fade-left" data-odata-aos-delay="1000"className="right-side">
                <h2>Enter your details below</h2>

                <form>
                    <div className="Metric">
                        <input type="radio" id='salma' name='User' defaultChecked />
                        <label htmlFor="salma">Metric</label>
                    </div>

                    <div className="Imperial">
                        <input type="radio" id='mohamed' name='User' />
                        <label htmlFor="mohamed">Imperial</label>
                    </div>
                </form>

                <div className="total">
                    <div className="Height">
                        <h4>Height</h4>
                        <div className="cm">
                            <h2>182</h2>
                            <h3>Cm</h3>
                        </div>
                    </div>
                    <div className="Weight">
                        <h4>Weight</h4>
                        <div className="kg">
                            <h2>80</h2>
                            <h3>Kg</h3>
                        </div>
                    </div>
                </div>

                <div className="bg">
                    <div className="left">
                        <p>Your BMI is...</p>
                        <h2>23.4</h2>
                    </div>
                    <div className="right">
                        <p>Your BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.</p>
                    </div>
                </div>
            </div>
        </header>

        // End header home page


        
    );
}

export default Header;
