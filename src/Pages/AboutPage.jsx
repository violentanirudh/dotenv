const AboutPage = () => {
    return (
        <div className="flex items-center justify-between px-4 py-40">
            <div>
                <h1 className="text-6xl font-bold text-white mb-8">About .ENV</h1>
                <p className="text-xl max-w-2xl leading-relaxed mb-8 text-gray-300">
                    Welcome to .ENV, a vibrant community dedicated to empowering individuals in the tech industry. We are a group of passionate individuals committed to fostering collaboration, innovation, and support among our members.
                </p>
            </div>
            <img src="/community.svg" className="w-96"/>
        {/* 
            <div className="mt-16 w-full flex flex-col items-center">
                <h2 className="text-4xl font-semibold text-white mb-6">Join Our Community</h2>
                <p className="text-lg max-w-xl text-center leading-relaxed mb-8 text-gray-300">
                    Become a part of our dynamic community where you can connect with like-minded individuals, share knowledge, and collaborate on exciting projects. Your journey towards personal and professional growth starts here!
                </p>
                <a 
                    href="#" 
                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-500 transition-all"
                >
                    Join The Community
                </a>
            </div> */}
        </div>
    );
}

export default AboutPage;
