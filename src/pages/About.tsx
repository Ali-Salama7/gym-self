const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Our Gym</h1>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Welcome to{" "}
        <span className="font-semibold text-yellow-600">IronCore Fitness</span>{" "}
        — your go-to gym for building strength, flexibility, and endurance. We
        offer world-class training programs, expert coaches, and a motivating
        environment that helps you crush your goals.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Our mission is to make fitness accessible and enjoyable for everyone.
        Whether you're a beginner or an experienced athlete, we’ve got something
        for you — from yoga and pilates to CrossFit and strength training.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Come join our community and take the first step towards a healthier
        lifestyle.
        <strong className="text-yellow-600">
          {" "}
          We’re more than a gym — we’re family.
        </strong>
      </p>

      <div className="mt-6">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1050&q=80"
          alt="Gym overview"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
