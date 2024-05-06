import React from 'react'

const Hero = () => {
    return (
        <div>
            <section>
                <div className="bg-black text-white pb-20">
                    <div className=" mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start sm:p-8 order-2 md:order-1">
                            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">لینکو</h1>
                            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">بازاریابی وابسته : حتی در خواب پول درآورید!
                            </h2>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                                با قرار دادن لینک محصولات دیگران زیر پست های خود, به ازای هر فروش, کمیسیون دریافت خواهید گرفت.
                            </p>
                            <a href="#"
                                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                رایگان
                                شروع کن
                            </a>
                        </div>
                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center order-1 md:order-2">
                            <div className="h-48 flex flex-wrap content-center">
                                <div>
                                    <img className=" mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
                                <div>
                                    <img className="inline-block mb-24 md:mt-0 md:mb-0 p-2 sm:p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
                                <div>
                                    <img className="mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero