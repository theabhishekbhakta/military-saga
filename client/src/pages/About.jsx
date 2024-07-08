import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, { user ? `${user.username}` : `user` }</p>

                            <h1>What is MilitarySaga?</h1>

                            <p>
                                At Military Saga, our mission is to curate and provide access to comprehensive military information, making it universally accessible and invaluable to enthusiasts worldwide.
                            </p>

                            <p>
                                Explore the rich tapestry of military history and current events with us. Delve into our curated collection of articles, videos, and resources that showcase the most significant moments in military history and inspire the next generation of enthusiasts.
                            </p>

                            <p>
                                From unlocking opportunities to protecting users and responding to crises, we strive to make a meaningful impact in every aspect of our platform.
                            </p>

                            <p>
                                Together, let's leverage innovation to benefit individuals and communities worldwide.
                            </p>

                            <div className="btn btn-group">
                                <a href="/contact"><button className="btn">Connect now</button></a>
                                <a href="/service"><button className="btn secondary-btn">Learn more</button></a>
                            </div>
                        </div>

                        {/* Hero image */}
                        <div className="hero-image">
                            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708527600&semt=sph" alt="home img" width="450" height="500" />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            <Analytics />
        </>
    );
};