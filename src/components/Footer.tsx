
const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {year} Gym Website. All rights reserved.
    </footer>
  )
}

export default Footer