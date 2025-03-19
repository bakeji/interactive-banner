export default function Banner({ bannerContent }) {
  return (
    <div
      className={`w-full h-[217px] p-2 flex items-center justify-center gap-10 ]`}
      style={{
        color: bannerContent.textColor,
        backgroundColor: bannerContent.background,
      }}
    >
      <div
        className={`w-[171px] h-[171px] rounded-[50%] border-[#FF0E8B] flex items-center justify-center border-2  bg-no-repeat bg-center bg-cover`}
        style={{ backgroundImage: `URL(${bannerContent.picture})` }}
      ></div>

      <div className="flex flex-col items-center w-[70%] justify-center">
        <h1 className="text-[32px] text-center  font-[700]">
          {bannerContent.title}
        </h1>
        <p className="text-[24px] text-center font-500 ">
          {bannerContent.content}
        </p>
      </div>
    </div>
  );
}
