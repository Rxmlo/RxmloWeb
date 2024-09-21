
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.com/oauth2/authorize?client_id=1284268171976773664">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/676124992919830548/72826a4ed7d1a010df263623be5dd4ba.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Mandsy</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Mandsy Herkese açık Discord botu!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1274439590832246804/1287016942686703648/image_-_2024-09-15T141929.083.png?ex=66f0036e&is=66eeb1ee&hm=5c754851b1d98e5bae6278eefa440ba46fc54655c1e8753a7b4b46c1f6cc32a5&=&format=webp&quality=lossless&width=423&height=423" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">YOK</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   sponsor bulunmamaktadır! olmak isteyen kişileri **destek sunucusu** na bekliyoruz!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
