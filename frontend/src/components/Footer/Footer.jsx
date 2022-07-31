import { UpperFooter } from "./UpperFooter"
import { useEffect, useState } from 'react';
import { FixedFooter } from "./FixedFooter";


export const Footer = () => {

    const [footDisplay, setFootDisplay] = useState(true)
    // console.log('display', display)


    const handleIntersectionObser = () => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        }

        const target = document.getElementById('footer');

        const headerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setFootDisplay(false)
                }
                if (!entry.isIntersecting) {
                    setFootDisplay(true)
                }

            }, options)
        })
        headerObserver.observe(target)

    }

    useEffect(() => {
        handleIntersectionObser()
    })


    return (
        <div>
            <FixedFooter display={footDisplay}/>
            <UpperFooter/>
            <div id="footer" className="text-center uppercase bottom-0 w-full p-3 border-2 relative">
                <p>Made with love by Neha</p>
            </div>
        </div>
    )
}