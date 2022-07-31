


export const Modal = () => {

    return (
        <div className='absolute opacity-70 z-20 top-0 left-0 h-screen w-screen bg-gray-400 text-center flex text-4xl'>
            <div className='z-30 h-36 w-36 m-auto flex gap-4'>
                <div className="h-1/4 w-1/4 m-auto rounded-full bg-emerald-600 animate-bounce transition-shadow duration-300 delay-0"></div>
                <div className="h-1/4 w-1/4 m-auto rounded-full bg-rose-600 animate-bounce transition-shadow duration-300 delay-300"></div>
                <div className="h-1/4 w-1/4 m-auto rounded-full bg-fuchsia-700 animate-bounce transition-shadow duration-300 delay-600"></div>
            </div>
        </div>
    )

}