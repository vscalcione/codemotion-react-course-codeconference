import React from 'react';

export const FooterComponent = () => {
    return (
        <footer className="footer">
            <nav className="footerNav">
                <ul>
                    <li>
                        <a href="#">Code of Conduct</a>
                    </li>
                    <li>
                        <a href="http://conf2018.reactjs.org/">2018</a>
                    </li>
                    <li>
                        <a href="http://conf2017.reactjs.org/">2017</a>
                    </li>
                    <li>
                        <a href="http://conf2016.reactjs.org/">2016</a>
                    </li>
                    <li>
                        <a href="http://conf2015.reactjs.org/">2015</a>
                    </li>
                    <li>
                        Questions? <a href="mailto:mailtest@gmail.com">Email us!</a>
                    </li>
                </ul>
            </nav>

            <small className="copyright">Facebook &copy; 2020</small>
        </footer>
    )
};