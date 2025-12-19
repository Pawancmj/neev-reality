import Image from "next/image"


export default function career(){
    return(
        <main className="bg-[#F8FBFF]  mx-auto" style={{width:1520,height:432}}>
            <div>
                <h1 className="font-bold relative left-26 " style={{width:672,height:136,fontSize:57}}>Reshape the <span className="text-[#DBA40D]"> Real Estate </span> Industry With Us</h1>

                <h2 className="relative top-22 left-26" style={{width:426,height:48,fontSize:40}}>The <span className="text-[#DBA40D]">Neev Realty</span>  Team</h2>

                <button className="relative left-28 top-28 bg-[#DBA40D] text-white rounded-lg border-1" style={{width:253,height:49}}>View Open Position</button>

                <Image
                                src="/images/career/img1.png"
                                alt=""
                                width={394}
                                height={423}
                                className="object-cover absolute left-259 top-30"
                                style={{ width: 394, height: 423 }}
                              />
            </div>
        </main>
    )
}