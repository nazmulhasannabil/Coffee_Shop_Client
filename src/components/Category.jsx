// components/Category.jsx
import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png' 
import icon3 from '../assets/icons/3.png' 
import icon4 from '../assets/icons/4.png' 


const features = [
  {
    icon: icon1,
    title: "Awesome Aroma",
    description: "You will definitely be a fan of the design & aroma of your coffee.",
  },
  {
    icon: icon2,
    title: "High Quality",
    description: "We serve the coffee to you maintaining the best quality.",
  },
  {
    icon: icon3,
    title: "Pure Grades",
    description: "The coffee beans are ethically selected from the best quality farms.",
  },
  {
    icon: icon4,
    title: "Proper Roasting",
    description: "Your coffee is brewed by our roasting experts the right way.",
  },
];

export default function Category() {
  return (
    <section className="py-16  px-[8%] bg-[#ECEAE3] text-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#ECEAE3] p-6 hover:shadow-lg transition items-start text-left">
            <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
