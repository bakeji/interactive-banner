export default function Banner({bannerContent}) {
    return(
        <div className={`w-full h-[217px] bg-[${bannerContent.background}] flex items-center justify-center gap-10 text-white`}>
            <div className={`w-[171px] h-[171px] rounded-[50%] border-[#FF0E8B] flex items-center justify-center border-2 bg-[url(${bannerContent.picture})] bg-no-repeat bg-center bg-cover`}></div>

            <div className="flex flex-col items-center w-[70%] justify-center">
                <h1 className="text-[32px] text-center  font-[700]">{bannerContent.title}</h1>
                <p className="text-[24px] text-center font-500 ">{bannerContent.content}</p>
            </div>
        </div>
    ) 
}