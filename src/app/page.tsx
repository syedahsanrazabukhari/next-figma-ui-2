
export default function Home() {
  return (

    <>
      <header className="bg-[#043873] px-[220px] py-4 flex justify-between items-center text-white">
        <img className="w-[191px] h-[34px]" src="/logo.png" alt="failed" />
        <div className="flex gap-[60px] items-center">
          <ul className="flex gap-8">
            <li className=" text-[#FFFFFF] font-dm-sans font-medium text-[18px] leading-[23px] w-[78px] h-[23px]">Products</li>
            <li className="  text-[#FFFFFF]font-dm-sans font-medium text-[18px] leading-[23px] w-[78px] h-[23px]">Solutions</li>
            <li className="  text-[#FFFFFF] font-dm-sans font-medium text-[18px] leading-[23px] w-[78px] h-[23px]">Resources</li>
            <li className="  text-[#FFFFFF] font-dm-sans font-medium text-[18px] leading-[23px] w-[78px] h-[23px]">Pricing</li>
          </ul>
          <button className="rounded-[8px] pt-[16px] pr-[40px] pb-[16px] pl-[40px] gap-[10px] bg-[#FFE492]">
            <p className="font-inter font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[#043873] w-[46px] h-[23px]">Login</p>
          </button>

        </div>
      </header>




      <main>
        <section className="px-[140px] py-[220px] bg-[#043873] flex justify-center items-center text-white">
          <div className="space-y-[60px] w-[656px]">
            <div className="space-y-6">
              <h2 className="text-[64px] font-bold leading-[77px]">Get More Done with whitepace</h2>
              <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>

            <button className="p-5 flex items-center gap-x-2.5 rounded-lg bg-[#4F9CF9]">
              <p>Try Whitepace free</p>
              <img src="/arrow.svg" alt="" />
            </button>
          </div>

          <img src="/image-container.png" alt="" />
        </section>


        <section className="px-[140px] py-[220px] space-y-[100px]">
          <div className="flex justify-center items-center gap-x-[60px]">
            <div className="space-y-[60px] w-[656px]">
              <div className="space-y-6">
                <h1>Project Management</h1>
                <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
              </div>

              <button className="p-5 flex items-center gap-x-2.5 rounded-lg bg-[#4F9CF9] text-white">
                <p>Get Started</p>
                <img src="/arrow.svg" alt="" />
              </button>
            </div>
            <div className="w-[748px] h-[547px] bg-[#C4DEFD]" />
          </div>


          <div className="flex justify-center items-center gap-x-[60px]">
            <img src="/Work-Image-2.png" alt="failed" />
            <div className="space-y-[60px] w-[656px]">
              <div className="space-y-6">
                <h1 className="font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] w-[670px] h-[87px] text-[#212529]">Work together</h1>
                <p className="w-[670px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529]">With whitepace, share your notes with your colleagues and collaborate on them.
                  You can also publish a note to the internet and share the URL with others.
                </p>
              </div>

              <button className="py-5 px-10 flex items-center gap-x-2.5 rounded-md bg-[#4F9CF9] text-white">
                <p>Try it now</p>
                <img src="/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-[140px] py-[220px] bg-[#043873] flex justify-center items-center text-white gap-[98px]">
          <div className="space-y-[60px] w-[656px]">
            <div className="space-y-6">
              <h1 className="w-[697px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em]">Use as Extension</h1>
              <p className="w-[697px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
              </p>
            </div>

            <button className="p-5 flex items-center gap-x-2.5 rounded-lg bg-[#4F9CF9]">
              <p>Let’s Go</p>
              <img src="/arrow.svg" alt="" />
            </button>
          </div>
          <img src="extension.svg" alt="failed" />
        </section>

        <section className="px-[140px] py-[220px] flex justify-center items-center text-[#212529] gap-[98px]">
          <img src="/contumize-image.svg" alt="failed" />
          <div className="space-y-[60px] w-[656px]">
            <div className="space-y-6">
              <h1>Customise it to your needs</h1>
              <p className="w-[669px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
            </div>

            <button className="py-5 px-10  flex items-center gap-x-2 rounded-lg bg-[#4F9CF9]">
              <p className="text-white">Let’s Go</p>
              <img src="/arrow.svg" alt="" />
            </button>
          </div>
        </section>




        <section className="py-[140px] bg-[#043873]">
          <div className="w-[1064px] space-y-[60px] text-white mx-auto text-center">
            <div className="space-y-6">
              <h1>Your work, everywhere you are</h1>
              <p className="font-inter font-normal text-[18px] leading-[30px] tracking-[-2%]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            </div>

            <button className="py-5 px-10 mx-auto flex items-center gap-x-2 rounded-lg bg-[#4F9CF9]">
              <p>Let’s Go</p>
              <img src="/arrow.svg" alt="" />
            </button>
          </div>

        </section>

        <section className="py-[140px] px-[220px] space-y-[100px]">
          <h1 className="w-[1482px]font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-center">Our sponsors</h1>
          <div className="flex justify-between">
            <img src="/Apple.svg" alt="fail" />
            <img src="/microsoft.svg" alt="fail" />
            <img src="sponser-3.svg" alt="fail" />
            <img src="/google.svg" alt="fail" />
          </div>
        </section>

        <section className="pt-[140px] pr-[220px] pb-[32px] pl-[220px] bg-[#043873] ">
          <div className="space-x-[100px] flex gap-[200px]  justify-between ">
            <div className="space-y-[15px]">
              <img className="w-[191px] h[34px]" src="/logo.png" alt=" fail" />
              <p className="w-[240px] h-[120px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className="space-y-[15px] flex flex-col">
              <p className=" w-[68px] font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Product</p>
              <p className=" w-[68px] font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFE492]">Overview</p>
              <p className=" w-[68px] font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Pricing</p>
              <p className="  font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Customer stories</p>
            </div>
            <div className="space-y-[15px] flex flex-col">
              <p className=" font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Resources</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Blog</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Guides & tutorials</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]"> Help center</p>
            </div>
            <div className="space-y-[15px] flex flex-col">
              <p className=" font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">Company</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]">About us</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]"> Careers</p>
              <p className=" font-inter font-[400px] text-[16px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]"> Media kit</p>
            </div>
          </div>
          <div className="space-y-[19.28px]">
          <div className=" mt-[80px] w-[1480px] border border-[#2E4E73]"/>
          <div className="flex justify-between items-center">
            <div>
              <p className="ml-[839px] w-[169px] font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] ">©2021 Whitepace LLC.</p>
            </div>
          </div>
          </div>


        </section>
      </main >
    </>
  );
}
