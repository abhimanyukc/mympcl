import React from 'react'
import { useTranslation } from 'react-i18next'
const Marque = () => {
  const [t, i18n] = useTranslation("global");
  return (
    
    <div className='p-1 px-8 mx-auto bg-white select-none max-w-screen-2xl md:px-24 '>
          <div className='flex items-center '> <div className='p-1 font-serif text-xl font-bold text-white bg-green-800 cursor-text'>{t("marque.message")}</div>
        
          <div className="overflow-hidden text-2xl text-black border cursor-pointer">
  <ul className="flex animate-marquee">
    <li className="mr-16 list-disc ">
      <div className="">गाउसहर बहुउदेस्यिय सहकारि सस्था लि  पोखरा-८,  कास्कि </div>
    </li>
    <li className="mr-16 list-disc">
      <div>{t("marque1.message")}</div>
    </li>
    <li className="mr-16 list-disc">
      <div>{t("marque2.message")}</div>
    </li>
    <li className="list-disc">
      <div>{t("marque3.message")}</div>
    </li>
  </ul>
</div>


            </div>
    </div>
  )
}

export default Marque
