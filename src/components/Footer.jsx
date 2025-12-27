const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-3 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <h1 className="opacity-50">Nur Aini Faadhilah</h1>
        </div>
        <div className="flex items-center gap-3">
            <i className="ri-github-fill ri2x text-3xl"></i>
            <i className="ri-instagram-fill ri2x text-3xl"></i>
            <i className="ri-linkedin-fill ri2x text-3xl"></i>
        </div>
    </div>
  )
}

export default Footer