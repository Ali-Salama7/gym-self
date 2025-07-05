import ClassCards from "../components/ClassCards";
import { classesData } from "../data/classes";

const Classes: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Classes</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {classesData.map((cls) => (
          <ClassCards
            key={cls.id}
            title={cls.title}
            description={cls.description}
            imgUrl={cls.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
