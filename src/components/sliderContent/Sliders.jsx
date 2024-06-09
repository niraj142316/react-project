import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const Sliders = () => {

    const data = [
        {
          id: 1,
          star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
          desc:"Lorem ipsum dolor sit amet consectetur adipis hello welcome to the demo website and me intro you to this webs he he helo elit. Placeat magnam dolorem.",
          more: "Read more",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
          name: "Sarah Taylor",
          iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
          title: "Customer",
          icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
          tagline:"C  O  M  P  A  N  Y",
          subtag:"TAGLINE GOES HERE"
        },
        {
          id: 1,
          star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          more: "Read more",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
          name: "Emma Watson",
          iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
          title: "Customer",
          icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
          tagline:"C  O  M  P  A  N  Y",
          subtag:"TAGLINE GOES HERE"
        },
        {
          id: 1,
          star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          more: "Read more",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
          name: "Erica M.",
          iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
          title: "Customer",
          icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
          tagline:"C  O  M  P  A  N  Y",
          subtag:"TAGLINE GOES HERE"
        },
        {
          id: 1,
          star:"https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          more: "Read more",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU",
          name: "Erica M.",
          iconTick:"https://t3.ftcdn.net/jpg/05/43/29/02/360_F_543290296_snhXYYelZwXmXoo1sUoVMD54GXTPguWH.jpg",
          title: "Customer",
          icon: "https://png.pngtree.com/png-clipart/20200720/original/pngtree-river-logo-template-vector-icon-illustration-design-png-image_4781539.jpg",
          tagline:"C  O  M  P  A  N  Y",
          subtag:"TAGLINE GOES HERE"
        },
      ]

      const settings={dots:true,
        infinite:true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1
      };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
            {data.map((d)=>(
                <div key={d.name} className='bg-white h-[450px] text-black rounded-xl'>
                    <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                        <img src={d.profile} alt="" className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p className='text-center'>{d.desc}</p>
                        <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Sliders
