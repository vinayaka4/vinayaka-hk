import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-32 bg-rednortheastern pt-10 overflow-hidden">
            <div className="w-full mx-auto text-center">
                <div className="grid grid-rows-2 md:flex justify-center md:justify-between text-center">
                    {/* First Row */}
                    <div className="row-span-1 md:col-span-2">
                        <p className="font-playfair ml-2  font-semibold text-2xl text-white">
                            VINAYAKA HK
                        </p>
                        <p className="font-playfair text-md text-white">
                            ©2022 VINAYAKA. All Rights Reserved.
                        </p>
                    </div>

                    {/* Second Row */}
                    <div className="row-span-1 mr-2 md:col-span-1">
                        <SocialMediaIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
