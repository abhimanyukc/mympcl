
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Departmentc() {
    const { t } = useTranslation('global');
    const posts = [
        {
            title: "dep.message",
            img: "https://cdn.pixabay.com/photo/2016/06/01/08/40/money-1428594_1280.jpg",
            content: "dep1.message"
        },
        {
            title: "dep2.message",
            img: "https://cdn.pixabay.com/photo/2017/06/24/22/33/credit-card-2439141_1280.jpg",
            content: "dep3.message"
        },
        {
            title: "dep4.message",
            img: "https://cdn.pixabay.com/photo/2018/02/22/23/06/security-camera-3174223_1280.jpg",
            content: "dep5.message"
        },
        {
            title: "dep6.message",
            img: "https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_1280.jpg",
            content: "dep7.message"
        },
        {
          title: "dep8.message",
          img: "https://cdn.pixabay.com/photo/2022/07/20/03/21/society-7333314_1280.png",
          content: "dep9.message"
      },
      {
        title: "dep10.message",
        img: "https://cdn.pixabay.com/photo/2015/10/30/10/04/share-price-1013626_1280.jpg",
        content: "dep11.message"
    },
    ];
    return (
        <>
        <div className='mx-auto max-w-screen-2xl'>
            <div className='flex-col mt-16 md:mt-24'>

            <div className='flex justify-center mb-6 text-lg font-bold '> {t('dep12.message')}</div>

            <div className="grid gap-2 px-8 md:px-24 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full mb-8 transition transform rounded-lg shadow-md lg:max-w-sm hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" key={key}>
                        <img
                            className="object-fill w-full h-48"
                            src={items.img}
                            alt="logo"
                        />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold ">
                                
                                {t(items.title)}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {t(items.content)}
                            </p>
                            <button className="px-4 py-2 text-sm text-white rounded shadow bg-primary">
                               {t('dep13.message')}
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



