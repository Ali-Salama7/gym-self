type TrainerCardProp = {
    name: string
    specialty: string
    imgUrl: string
    socialLinks?: {
        instagram?: string
        twitter?: string
        facebook?: string
    }
}

const TrainerCard: React.FC<TrainerCardProp> = ({name, specialty, imgUrl, socialLinks}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center">
        <img src={imgUrl} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mb-3">{specialty}</p>
        <div className="flex space-x-4">
            {socialLinks?.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">Instagram</a>
            )}
            {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
            )}
            {socialLinks?.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900">Facebook</a>
            )}
        </div>
    </div>
  )
}

export default TrainerCard