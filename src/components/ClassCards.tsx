type ClassCardsProp = {
    title: string
    description: string
    imgUrl: string
}

const ClassCards: React.FC<ClassCardsProp> = ({title, description, imgUrl}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
  )
}

export default ClassCards