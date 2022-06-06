import React from 'react'

function Footer() {
    return (
        <footer className="bg-offWhite mt-20 text-black gap-x-20 px-24 py-10 text-sm grid grid-cols-4">
            <div className="col-span-1">
                <h1 className="font-semibold">Support</h1>
                <ul className="text-xs space-y-3 mt-5">
                    <li>Help center</li>
                    <li>Safety information</li>
                    <li>Cancellation options</li>
                    <li>Our COVID-19 Response</li>
                    <li>Supporting people with disabilities</li>
                    <li>Report a neignbourhood concern</li>
                </ul>
            </div>
            <div className="col-span-1">
                <h1 className="font-semibold">Community</h1>
                <ul className="text-xs space-y-3 mt-5">
                    <li>Vivante.com: disaster relief housing</li>
                    <li>Support Afghan refugees</li>
                    <li>Combating discrimination</li>
                </ul>
            </div>
            <div className="col-span-1">
                <h1 className="font-semibold">Hosting</h1>
                <ul className="text-xs space-y-3 mt-5">
                    <li>Try Hosting</li>
                    <li>Vivante Cover: protection for Hosts</li>
                    <li>Explore hosting resources</li>
                    <li>Visit our community forum</li>
                    <li>How to host responsibly</li>
                </ul>
            </div>
            <div className="col-span-1">
                <h1 className="font-semibold">About</h1>
                <ul className="text-xs space-y-3 mt-5">
                    <li>Newsroom</li>
                    <li>Learn about new features</li>
                    <li>Letter from our founders</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Vivante Luxe</li>
                </ul>
            </div>
            <div className="col-span-4 h-[1px] bg-[#C4D1DB] mt-12 mb-6"></div>
            <div className="flex text-xs col-span-3 gap-x-20">
                <h1>Copyright reserved 2022 Vivante pvt. ltd.</h1>
                <ul className="flex list-disc gap-x-10">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Company Details</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer