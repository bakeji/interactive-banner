export default function Banner({ bannerContent }) {
  return (
    <div data-testid="banner"
      className={`w-full  p-4 flex items-center justify-center gap-10 max-md:gap-3 `}
      style={{
        color: bannerContent.textColor,
        backgroundColor: bannerContent.background,
      }}
    >
      <div
        className={`w-[171px] h-[171px] rounded-[50%] border-[#FF0E8B] max-md:w-[110px] max-md:h-[110px] flex items-center justify-center border-2  bg-no-repeat bg-center bg-cover`}
        style={{ backgroundImage: `URL(${bannerContent.picture})` }}
      ></div>

      <div className="flex flex-col items-center w-[70%] justify-center max-md:w-[90%]">
        <h1 className="text-[32px] text-center  font-[700] max-md:text-[24px]">
          {bannerContent.title}
        </h1>
        <p className="text-[24px] text-center font-500  max-md:text-[18px] max-md:font-[400] max-md:text-center">
          {bannerContent.content}
        </p>
      </div>
    </div>
  );
}
