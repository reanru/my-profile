import React, { useState } from 'react'

export default function Description({id, text, amountOfWords = 28}) {

    const [isExpanded, setIsExpanded] = useState(false)

    const splittedText = text.split(' ');
    const itCanOverflow = splittedText.length > amountOfWords;
    const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(' ') : text;
    const endText = splittedText.slice(amountOfWords - 1).join(' ');

    return (
        <>
            {/* <span className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html : text}} /> */}
            <span id={id}>
                <span className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html : beginText}} />       
                {itCanOverflow && (
                    <>
                        { !isExpanded ? (
                            <span>...</span>
                        ) : (
                            <span className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html : endText}} />
                        ) }
                        <span
                            className="text-sm text-blue-700 font-semibold whitespace-nowrap"
                            role="button"
                            onClick={()=>setIsExpanded(!isExpanded)}
                        >
                            { isExpanded ? ' show less' : ' show more' }
                        </span>
                    </>
                )}
            </span>
        </>
    )
}
