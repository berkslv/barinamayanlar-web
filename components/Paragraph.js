import React from 'react'

export default function Paragraph({content}) {

    return (
        <div className="min-h-screen w-full p-6">
            <h3 dangerouslySetInnerHTML={{ __html: content?.paragraph?.title }} className="text-white font-semibold md:text-6xl text-4xl" ></h3>
            <div dangerouslySetInnerHTML={{ __html: content?.paragraph?.content }} className="text-white md:text-2xl text-xl md:py-20 py-10 mx-auto lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12"></div>
        </div>
    )
}
