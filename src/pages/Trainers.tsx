import TrainerCard from "../components/TrainerCard";
import { trainersData } from "../data/trainer";

const Trainers: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meet Our Trainers</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {trainersData.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            name={trainer.name}
            specialty={trainer.specialty}
            imgUrl={trainer.imageUrl}
            socialLinks={trainer.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
