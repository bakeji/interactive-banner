

export default function BannerForm({bannerContent, setBannerContent, handleSubmit }) {

   function handleChange(e) {
    const { name, value, type, files } = e.target;
    setBannerContent((prev) => ({
        ...prev,
        [name]: type === "file" ? files[0] : value
    }))
   }

    
    return(
    <div className="mt-[20px] w-full ">
        <h1 className="text-center text-[32px]  font-[700]">Change Banner Content</h1>
        <form  className=" w-full flex mt-2 gap-[10px] items-center justify-center flex-col ">
            <fieldset className="flex flex-col gap-2 w-full items-center ">
                <label className="w-[50%] text-[24px] font-[500]" htmlFor="title">Title</label>
                <input className="border p-3 border-[#17092d] rounded-md w-[50%] h-[40px] outline-none"
                 type="text"
                  id="title" 
                  name="title"
                  value={bannerContent.title}
                  onChange={handleChange} />
            </fieldset>

            <fieldset className="flex flex-col  gap-2 w-full items-center" >
                <label className="w-[50%] text-[18px] font-[500]" htmlFor="content">Content</label>
                <textarea className="border p-3 border-[#17092d] rounded-md w-[50%] h-[40px] outline-none resize-none" 
                id="content" 
                name="content"
                value={bannerContent.content}
                onChange={handleChange}>
                </textarea>
            </fieldset>
            <div className="flex items-center w-full justify-center gap-25">
                <fieldset className="flex flex-col gap-2   items-center">
                    <label className="w-[100%] text-[18px] font-[500]" htmlFor="picture">Add a picture</label>
                    <input className="border border-[#17092d] p-3 text-center rounded-md w-[100%] h-[40px] outline-none resize-none" 
                    type="file"  
                    id="picture" 
                    name="picture"
                    accept="image/*"
                    onChange={handleChange}
                     />
                </fieldset>

                <fieldset className="flex flex-col  gap-2 items-center">
                    <label htmlFor=" text-[18px] font-[500] background">background color</label>
                    <input className="border border-[#17092d] rounded-lg w-[100%] h-[40px] outline-none resize-none" 
                    type="color"
                    name="background"
                     id="background" 
                     value={bannerContent.background}
                     onChange={handleChange}/>
                </fieldset>
            </div>

 </form>
</div>
    )
}