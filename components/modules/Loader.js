import React from 'react'

function Loader() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-amber-50">
            <div className="relative">
                {/* Coffee Cup */}
                <div className="w-24 h-24 border-4 border-amber-800 rounded-b-3xl rounded-t-lg relative">
                    <div className="absolute top-0 left-0 w-full h-8 bg-amber-800 rounded-t-lg"></div>
                    <div className="absolute top-2 left-2 w-20 h-16 bg-amber-100 rounded-b-2xl"></div>
                </div>

                {/* Steam Animation */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                        <div className="w-2 h-6 bg-amber-200 rounded-full animate-steam"></div>
                        <div className="w-2 h-6 bg-amber-200 rounded-full animate-steam animation-delay-200"></div>
                        <div className="w-2 h-6 bg-amber-200 rounded-full animate-steam animation-delay-400"></div>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-amber-800 mt-8">Brewing Your Coffee...</h2>
            <p className="text-amber-600 mt-2">Please wait while we prepare your perfect cup</p>
        </div>
    )
}

export default Loader
