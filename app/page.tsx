import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">OneclickDownload</h1>
        <div className="flex gap-2">
          <SearchBar />
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
