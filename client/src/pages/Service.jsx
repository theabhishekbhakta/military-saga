import { useAuth } from "../store/auth";

export const Service = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">
                {
                    services.map((curElem, index) => {
                        const { date, description, provider, service } = curElem;

                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708527600&semt=sph"
                                        alt="img"
                                        width="200" />
                                </div>

                                <div className="card-details">
                                    <div className="grid grid-two-cols">
                                        <p>{provider}</p>
                                        <p>{date}</p>
                                    </div>
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};