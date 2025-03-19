export default function BannerForm({ bannerContent, setBannerContent }) {
  // handle change for text and color input
  function handleChange(e) {
    const { name, value } = e.target;
    setBannerContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // handle change for file input and convert it to url
  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBannerContent((prev) => ({
        ...prev,
        picture: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="pb-5">
      <div className="mt-[20px] rounded-lg mx-auto w-[40%] pt-3 bg-[#ffffff] shadow-lg ">
        <h1 className="text-center text-[32px] text-[#17092d]  font-[700]">
          Change Banner Content
        </h1>
        <form className=" w-full  flex mt-2 gap-[10px] items-center justify-center flex-col ">
          <fieldset className="flex flex-col gap-2 w-full items-center ">
            <label className="w-[80%] text-[24px] font-[500]" htmlFor="title">
              Title
            </label>
            <input
              className="border p-3 border-[#17092d] rounded-md w-[80%] h-[40px] outline-none"
              type="text"
              id="title"
              name="title"
              value={bannerContent.title}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset className="flex flex-col  gap-2 w-full items-center">
            <label className="w-[80%] text-[18px] font-[500]" htmlFor="content">
              Content
            </label>
            <textarea
              className="border p-3 border-[#17092d] rounded-md w-[80%] h-[60px] outline-none resize-none"
              id="content"
              name="content"
              value={bannerContent.content}
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <fieldset className="flex flex-col gap-2 w-full   items-center">
            <label className="w-[80%] text-[18px] font-[500]" htmlFor="picture">
              Add a picture
            </label>
            <input
              className="border cursor-pointer border-[#17092d] p-3 text-center rounded-md w-[80%] h-[40px] outline-none resize-none"
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleFile}
            />
          </fieldset>
          <div className="flex items-center mb-4 w-[80%] justify-between gap-2">
            <fieldset className="flex  gap-2 items-center">
              <label
                htmlFor="text"
                className="text-[18px] font-[500] background"
              >
                background color:
              </label>
              <input
                className="border cursor-pointer border-[#17092d] w-[30px] rounded-[50%] h-[30px] outline-none resize-none"
                type="color"
                name="background"
                id="background"
                value={bannerContent.background}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="flex  gap-2 items-center">
              <label
                htmlFor="text"
                className=" text-[18px] font-[500] background"
              >
                Text color
              </label>
              <input
                className="border  cursor-pointer border-[#17092d] rounded-[50%] w-[30px] h-[30px] outline-none resize-none"
                type="color"
                name="textColor"
                id="textColor"
                value={bannerContent.textColor}
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
