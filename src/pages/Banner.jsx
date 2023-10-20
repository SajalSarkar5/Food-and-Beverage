

const Banner = () => {
    return (
        <div className="mt-16">
            <div className="hero h-[60vh] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/hH84BSJ/food-beverage-capcalera.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Food & Beverage <br /> Delivery</h1>
                        <p className="mb-5">Enjoy a wide variety of culinary delights and refreshing drinks, delivered promptly to your doorstep for a delightful dining experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;