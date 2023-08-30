export default function BackgroundBlur() {
  return (
    <div className="-z-10">
      <div className="absolute left-[55%] top-[10%] h-40 w-40 rounded-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 opacity-90 blur-3xl"></div>
      <div className="absolute left-[50%] top-[18%] h-40 w-40 transform rounded-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 opacity-60 blur-3xl"></div>
    </div>
  );
}
