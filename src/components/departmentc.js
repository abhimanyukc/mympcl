



import React from 'react'



export default function Departmentc() {
    const posts = [
        {
            title: "Savings",
            img: "https://cdn.pixabay.com/photo/2016/06/01/08/40/money-1428594_1280.jpg",
            content: "  all the saving related services "
        },
        {
            title: "Credit",
            img: "https://cdn.pixabay.com/photo/2017/06/24/22/33/credit-card-2439141_1280.jpg",
            content: "  all the credit related services"
        },
        {
            title: "Admin/Finance",
            img: "https://cdn.pixabay.com/photo/2018/02/22/23/06/security-camera-3174223_1280.jpg",
            content: " all the finance related services"
        },
        {
            title: "Marketing and Promotions",
            img: "https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_1280.jpg",
            content: "all the marketing related information"
        },
        {
          title: "Human Resource",
          img: "https://cdn.pixabay.com/photo/2022/07/20/03/21/society-7333314_1280.png",
          content: " all the human resources related information"
      },
      {
        title: "Non financial",
        img: "https://cdn.pixabay.com/photo/2015/10/30/10/04/share-price-1013626_1280.jpg",
        content: " all the non financial related information"
    },
    ];
    return (
        <>
        <div className='mx-auto max-w-screen-2xl'>
            <div className='flex-col mt-16 md:mt-24'>

            <div className='flex justify-center mb-6 text-lg font-bold max-w-screen-2xl'> Department</div>

            <div className="grid gap-2 px-8 md:px-24 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full mb-8 rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-fill w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold ">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-white rounded shadow bg-primary">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </>
    );
}



