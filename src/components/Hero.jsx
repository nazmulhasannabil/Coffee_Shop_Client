import bgImg from '../assets/more/3.png';

export default function Hero() {
    return (
        <section
            className="text-white py-48 px-6 flex justify-end"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="p-8 max-w-3xl flex flex-col items-start text-left">
                <h2 className="text-3xl md:text-4xl font-rancho mb-4">
                    Would you like a Cup of Delicious Coffee?
                </h2>
                <p className="text-md mb-6 ">
                    It’s coffee time – Sip & Savor – Relaxation at every sip! <br />
                    Get the nostalgic touch of our companionship of every memory by the beautiful moments and make them memorable.
                </p>
                <button className="bg-[#E3B577] text-white font-semibold py-2 px-6 transition duration-300
  hover:bg-transparent hover:text-[#E3B577] border border-transparent hover:border hover:border-[#E3B577]">
                    Learn More
                </button>

            </div>
        </section>
    );
}
