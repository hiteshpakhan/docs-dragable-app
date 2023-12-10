import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-6 overflow-hidden flex-shrink-0'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
          <div className='flex items-center justify-between px-3 py-3 mb-3 '>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose /> : <LuDownload size="1em" color='#fff' /> }
            </span>
          </div>
          {
            data.tag.isOpen == true && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
              </div>
            )
          }
          
        </div>
    </motion.div>
  )
}

export default Card