import Container from "../../components/UI/Container";
import cleaningImage from "../../assets/images/pexels-matilda-wormwood-4099481.jpg";
const Home = () => {
    return (
        <Container>
            <div className="md:flex py-12 md:gap-6 items-center">
                <div className="flex-1">
                    <h1 className="text-[34px] text-center md:text-left md:text-5xl lg:text-6xl font-bold leading-10 md:leading-[60px] lg:leading-[70px] mb-7">Quality cleaning <br /> <span className="text-primary">for your home</span></h1>
                    <p className="mb-6 text-center md:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem qui quibusdam odit reiciendis non.</p>
                    <div className="md:flex gap-6 mb-8 items-center">
                        <button className="btn btn-primary text-white text-lg w-full md:w-44">Book a Services</button>
                        <button className="btn btn-ghost text-lg border-[2px] border-current w-full md:w-44 mt-6 md:mt-0">Read More</button>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="max-h-[600px] object-cover w-full" src={cleaningImage} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Home;