const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7 ">
            <a
                className="hover:opacity-50 trasition duration-500 w-6"
                href="https://www.linkedin.com/in/vinayaka-hk-137722110/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 trasition duration-500 w-6 h-24"
                href="https://github.com/vinayaka4"
                target="_blank"
                rel="noreferrer">
                <img alt="github-link" src="th.jpeg" />
            </a>
        </div>
    )
}

export default SocialMediaIcons