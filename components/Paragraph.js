import React from 'react'

export default function Paragraph({content}) {

    return (
        <div className="min-h-screen w-full p-6">
            <h3 dangerouslySetInnerHTML={{ __html: content?.paragraph?.title }} className="text-white font-semibold md:text-6xl text-4xl" ></h3>
            <div dangerouslySetInnerHTML={{ __html: content?.paragraph?.content }} className="text-white md:text-xl text-lg md:py-20 md:px-52 py-10 px-3"></div>
        </div>
    )
}
