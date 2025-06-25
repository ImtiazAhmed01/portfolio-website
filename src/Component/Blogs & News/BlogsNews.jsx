import React from 'react';
import image1 from "../../assets/images/Screenshot 2025-06-25 122406.jpg"
import image2 from "../../assets/images/Screenshot 2025-06-25 130338.jpg"
import image3 from "../../assets/images/Screenshot 2025-06-25 131157.jpg"
import image4 from "../../assets/images/Screenshot 2025-06-25 142829.jpg"
import image5 from "../../assets/images/Screenshot 2025-06-25 200847.jpg"
import image6 from "../../assets/images/Screenshot 2025-06-25 201851.jpg"

const BlogsNews = () => {
    return (
        <div className='bg-[#FAF6F0] p-6 -mb-10'>
            <div className='bg-yellow-300 px-10 py-10 rounded-2xl'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image1} alt="" />
                        <p className="font-semibold"
                        >
                            GitHub Copilot Spaces: Bring the Right Context to Every Suggestion
                        </p>
                        <p className='mt-2 text-sm text-gray-600'>
                            Learn how GitHub Copilot Spaces aims to enhance AI pair programming by delivering better context for each suggestion. <a href="https://github.blog/ai-and-ml/github-copilot/github-copilot-spaces-bring-the-right-context-to-every-suggestion/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image2} alt="" />
                        <p className="font-semibold"
                        >
                            Highlights from Git 2.50

                        </p>
                        <p className='mt-2 text-sm text-gray-600'>
                            The open source Git project just released Git 2.50. Here is GitHub’s look at some of the most interesting features and changes introduced since last time. <a
                                href="https://github.blog/open-source/git/highlights-from-git-2-50/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image3} alt="" />
                        <p className="font-semibold"
                        >
                            GitHub Copilot coding agent is now available for Copilot Business users</p>
                        <p className='mt-2 text-sm text-gray-600'>

                            Last month, we launched GitHub Copilot coding agent in public preview, allowing users with Copilot Pro+ and Copilot Enterprise to delegate tasks to Copilot to work on in the background.

                            Today, we’ve opened this new agent to Copilot Business subscribers. <a
                                href="https://github.blog/changelog/2025-06-24-github-copilot-coding-agent-is-now-available-for-copilot-business-users/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image5} alt="" />
                        <p className="font-semibold"
                        >
                            Vite 7.0 is out!</p>
                        <p className='mt-2 text-sm text-gray-600'>
                            We're happy to share the release of Vite 7! It has been 5 years since Evan You sent the first commit to the Vite repo, and nobody could have predicted how much the frontend ecosystem would change since then. Most modern frontend frameworks and tools are now working together, building on top of Vite's shared infrastructure. And they can innovate at a faster pace by sharing at a higher level.
                            <a href="https://vite.dev/blog/announcing-vite7.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image4} alt="" />
                        <p className="font-semibold"
                        >
                            5 tips for using GitHub Copilot with issues to boost your productivity                    </p>
                        <p className='mt-2 text-sm text-gray-600'>
                            Managing issues in software development can be tedious and time-consuming. But what if your AI peer programmer could streamline this process for you? GitHub Copilot‘s latest issue management features can help developers create, organize, and even solve issues.
                            <a href="https://github.blog/ai-and-ml/github-copilot/5-tips-for-using-github-copilot-with-issues-to-boost-your-productivity/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                    <div className='bg-[#FAF6F0] p-3 rounded shadow git'>
                        <img src={image6} alt="" />
                        <p className="font-semibold"
                        >
                            12 Best AI Tools for Web Development</p>
                        <p className='mt-2 text-sm text-gray-600'>
                            To say I am not a coder is an understatement. I have hired two web developers to build and update my own business website and a third to design it. I imagine that talented developers consider coding to be a joy, whereas I am a word person through and through.

                            <a href="https://blog.hubspot.com/website/ai-for-website-development"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black font-bold hover:underline'> Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsNews;
