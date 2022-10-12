import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Career = () => {
    const navigate = useNavigate()
    return (
        <main class="main bg-white px-6 md:px-16 py-6 my-16">
            <div class="w-full max-w-xl mx-auto">
                <form action="" method="post">
                    <h1 class="text-[2.5vw] mb-2 text-primary">Apply to Join With Us</h1>

                    <div class="job-info border-b-2 py-2 mb-5">
                        {/* <!--    Title      --> */}
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm mb-2" for="job-title">Title</label>
                            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="job-title" name="job-title" placeholder="Frontend Developer" autofocus />
                        </div>

                        {/* <!--     Link to apply     --> */}
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm mb-2" for="apply-link">Portfolio Link</label>
                            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="apply-link" name="apply-link" placeholder="https://www.about.me" />
                        </div>

                        <div class="md:flex md:justify-between">
                            {/* <!--      Job Type      --> */}
                            <div class="w-full md:w-3/12 mb-4 md:mb-0">
                                <label class="block text-gray-700 text-sm mb-2" for="job-type">
                                    Job Type
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Freelance</option>
                                        <option>Contract</option>
                                    </select>

                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!--     Location       --> */}
                            <div class="w-full md:w-8/12 mb-4 md:mb-0">
                                <label for="location" class="block text-gray-700 text-sm mb-2">Location</label>
                                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Schwerin" />

                                <div>
                                    <label class="text-gray-600 flex items-center" for="remote">
                                        <input class="mr-2 leading-tight" type="checkbox" id="remote" />
                                        <span class="text-sm">Work can be done remotely</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end group --> */}

                        {/* <!--    Description      --> */}
                        <div>
                            <label for="description" class="block text-gray-700 text-sm mb-2">Cover Letter</label>
                            <textarea className='border border-black w-full h-32' name="description" id="description" cols="" rows=""></textarea>
                        </div>

                        <div class="flex flex-wrap -mx-3">
                            {/* <!--     Company       --> */}
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label for="company" class="block text-gray-700 text-sm mb-2">GitHub</label>
                                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="www.github.com/user1" />
                            </div>

                            {/* <!--      Company Website      --> */}
                            <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                <label for="company" class="block text-gray-700 text-sm mb-2">LinkedIn</label>
                                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="https://www.linkedin.com/user1" />
                            </div>
                        </div>
                        {/* <!-- end group --> */}

                        {/* <!--      Company Website      --> */}
                        <div class="mb-4 md:mb-0">
                            <label for="company-logo" class="block text-gray-700 text-sm mb-2">Upload Resume</label>
                            <input type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo" />
                        </div>
                    </div>

                    {/* <!--     Submit     --> */}
                    <div>
                        <button onClick={() => {
                            toast.error(`Sorry! Opening has been closed.`)
                            navigate('/')
                        }} class="bg-primary hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Apply Now</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Career;