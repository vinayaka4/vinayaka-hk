import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, closeMenu }) => {
    const lowerCasePage = page.toLowerCase();
    const handleLinkClick = () => {
        setSelectedPage(lowerCasePage);
        if (closeMenu) {
            closeMenu(); // Close the menu if closeMenu is available
        }
    };

    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={handleLinkClick}
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
        >
            {page}
        </AnchorLink>
    );
};


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-rednortheastern";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">VHK</h4>

                {/* DESKTOP NAV */}

                {
                    isAboveSmallScreens ? (
                        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">

                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link
                                page="WorkExperience"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />

                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />


                        </div>

                    ) : (<button className="rounded-full bg-yellow p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}

                    >
                        <img alt="menu-icon" src="../assets/menu.svg" />
                    </button>)
                }
                {/* Mobile Menu Popup*/}

                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-BlueGrey-500 w-[300px]">
                        {/*close ICOn*/}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src="../assets/close-icon.svg" />
                            </button>


                        </div>


                        <div className="flex flex-col gap-10 ml-[33] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />
                            <Link
                                page="WorkExperience"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />
                            <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                closeMenu={() => setIsMenuToggled(false)} />



                        </div>
                    </div>
                )}

            </div>
        </nav>
    )

}

export default Navbar
