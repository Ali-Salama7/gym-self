import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20 px-6 text-center rounded-lg shadow-md">
        <h1 className="text-4xl md:text-3xl font-bold mb-4">
          Build Your Body, Boost Your Life
        </h1>
        <p className="text-lg md:tex-xl mb-8 max-w-2xl mx-auto">
          {" "}
          Join IronCore Fitness today and transform your lifestyle with expert
          trainers, modern equipment, and powerful workouts.
        </p>
        <Link
          to="/classes"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          View Classes
        </Link>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto"></section>
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-bold text-xl mb-2">Expert Trainers</h3>
          <p className="text-gray-600">
            Get guided by certified fitness professionals.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-bold text-xl mb-2">Modern Equipment</h3>
          <p className="text-gray-600">
            Top-tier gym equipment for maximum performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-bold text-xl mb-2">Flexible Programs</h3>
          <p className="text-gray-600">
            Custom plans to fit your goals and schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
