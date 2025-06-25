import React from 'react';
import image1 from "../../assets/images/Screenshot 2025-06-25 122406.jpg"
import image2 from "../../assets/images/Screenshot 2025-06-25 130338.jpg"
import image3 from "../../assets/images/Screenshot 2025-06-25 131157.jpg"
import image4 from "../../assets/images/Screenshot 2025-06-25 142829.jpg"

const BlogsNews = () => {
    return (
        <div className='bg-[#FAF6F0] p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white p-4 rounded shadow git'>
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
                <div className='bg-white p-4 rounded shadow git'>
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
                <div className='bg-white p-4 rounded shadow git'>
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
                <div className='bg-white p-4 rounded shadow git'>
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
            </div>
        </div>
    );
};

export default BlogsNews;
