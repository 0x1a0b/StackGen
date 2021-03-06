import React from 'react';
import { withPrefix } from 'gatsby';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid container-fluid-max-lg">
                <div className="row">
                    <div className="col-lg text-center text-lg-left mb-4 mb-lg-0">
                        <img className="logo" alt="Starter Logo" src={withPrefix("images/starter_logo_vertical_color.png")} />

                        <div className="clearfix d-lg-none"></div>

                        Brought to you by <a href="http://starter.io" className="font-weight-bold"  target="_blank" rel="noopener noreferrer">Starter, Inc.</a>
                    </div>

                    <div className="col-lg text-center text-lg-right">
                        <div>Powered by <a href="https://stackgen.io/" className="font-weight-bold"  target="_blank" rel="noopener noreferrer">StackGen™</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;