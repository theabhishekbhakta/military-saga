import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container sb_footer section_padding">
                <div className="grid-four-cols sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Military Saga</h4>
                        <p>At Military Saga, our commitment is to make military information accessible worldwide. We curate content to enrich your understanding of military history and current affairs.</p>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Quick Links</h4>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/About">
                            <p>About</p>
                        </a>
                        <a href="/Contact">
                            <p>Contact</p>
                        </a>
                        <a href="/Service">
                            <p>Services</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Nations</h4>
                        <a href="">
                            <p>Romania</p>
                        </a>
                        <a href="">
                            <p>Germany</p>
                        </a>
                        <a href="">
                            <p>Greece</p>
                        </a>
                        <a href="">
                            <p>France</p>
                        </a>
                        <a href="">
                            <p>Russia</p>
                        </a>
                        <a href="">
                            <p>Ukraine</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Read</h4>
                        <a href="">
                            <p>Hot</p>
                        </a>
                        <a href="">
                            <p>Political</p>
                        </a>
                        <a href="">
                            <p>Military</p>
                        </a>
                        <a href="">
                            <p></p>
                        </a>
                    </div>
                </div>



                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            ©{new Date().getFullYear()} Military Saga. All rights reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href=""><div className="privacy-policy"><p>Privacy Policy</p></div></a>
                        <a href=""><div><p>Terms & Conditions</p></div></a>
                    </div>
                </div>
            </div>
        </div>

    );
};