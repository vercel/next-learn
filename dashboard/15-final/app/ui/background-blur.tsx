export default function BackgroundBlur() {
  return (
    <div className="-z-10">
      <div className="absolute top-[8%] left-[55%] w-40 h-40 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-full blur-3xl opacity-90"></div>
      <div className="absolute top-[10%] left-[55%] w-40 h-40 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  )
}
