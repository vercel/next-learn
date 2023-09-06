export default function BackgroundBlur() {
  return (
    <>
      <div className="absolute left-[55%] top-[10%] -z-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 opacity-90 blur-3xl"></div>
      <div className="absolute left-[50%] top-[18%] -z-10 h-40 w-40 transform rounded-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 opacity-60 blur-3xl"></div>
    </>
  );
}
