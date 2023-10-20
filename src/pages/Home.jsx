import React from 'react'
// import img1 from '../assets/Images/Illustration.png'
import img2 from '../assets/Images/Card-2.png'
import img3 from '../assets/Images/fd13b5f3daac3dab9b08ff41887871d5.png'
import user1 from '../assets/Images/user1.png'
import user2 from '../assets/Images/user2.png'
import user3 from '../assets/Images/user3.png'
const Home = () => {
    const clk = (event) => {
        event.currentTarget.parentElement.nextElementSibling.classList.toggle("hide")
        event.currentTarget.firstElementChild.classList.toggle("hide")
        event.currentTarget.firstElementChild.nextElementSibling.classList.toggle("hide")
      }
    return (
        <>
            {/* ===== Section - 1 - start ===== */}

            <section id='sec' className='relative pb-3'>
                <div className='container w-full text-white md:text-black' id='sec-1-content'>
                    <h2 className='text-4xl pr-44 py-5'>Building stellar websites for startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex gap-10 py-3'><button className='rounded-full py-2 px-7 bg-yellow-200 text-black'>View our work</button> <span className='py-2 arw-h inline-block'>View Pricing</span></div>
                </div>
                <div className='' id='bg-img'>
                </div>
            </section>

            {/* ===== Section - 1 - end ===== */}

            {/* ===== Section - 2 - start ===== */}

            <section id='sec-2' className='py-36'>
                <div className='flex-none lg:flex container'>
                    <div className='w-full lg:w-1/3'>
                        <h3 className='py-5 text-4xl font-bold'>How we work</h3>
                        <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
                        <span style={{ color: "#2405F2" }} className='arw-h'>Get in touch with us</span>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <div className='grid grid-cols-2 gap-8 sec-2-num pt-2 sm:p-0'>
                            <div>
                                <span className='sec-2-spn'>01</span>
                                <h4>Strategy</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div>
                                <span className='sec-2-spn'>02</span>
                                <h4>Wireframing</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div>
                                <span className='sec-2-spn'>03</span>
                                <h4>Design</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div>
                                <span className='sec-2-spn'>04</span>
                                <h4>Development</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section - 2 - end ===== */}


            {/* ===== Section - 3 - start ===== */}

            <section id='sec-3' className='py-5'>
                <div className='container'>
                    <div className='flex w-full py-5 justify-between'>
                        <h2 className='font-bold text-4xl'>View our projects</h2>
                        <span className='pt-5 arw-h-sec-3 pr-10'>View More</span>
                    </div>
                    <div className='flex-none lg:flex py-10 gap-5'>
                        <div className='w-full lg:w-2/3 mb-5' id='sec-3-back-img'>
                            <div id='linear' className='pt-80 pb-10'>
                                <h4 className='text-2xl px-10 py-1 text-white'>Workhub office Webflow Webflow Design</h4>
                                <p className='px-10 py-1 text-white'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <span className='px-10 py-3 inline-block text-yellow-200'>View project &#8594;</span>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3' id='sec-3-back-img-2'>
                            <div id='bak-img-1'>
                                <div id='linear-1' className='pt-36 pb-8 pl-14 pr-32' >
                                    <h4 className='text-2xl py-3 text-white'>Unisaas Website Design</h4>
                                    <span className='text-yellow-200'>view portfolio &#8594;</span>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <img src={img2} width={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section - 3 - end ===== */}

            {/* ===== Section - 4 - start ===== */}

            <section id='sec-4' className='py-20'>
                <div className='container'>
                    <div id='sec-4-head' className='mx-auto  text-center'>
                        <span className='font-bold'>Features</span>
                        <h2 className='p-0 sm:px-28 text-xl sm:text-4xl font-bold'>Design that solves <br /> problems, one product at <br /> a time</h2>
                    </div>
                    <div id='sec-4-content' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  pt-10'>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                                    <path d="M16 10.8749C19.003 10.8749 21.4374 8.44047 21.4374 5.43745C21.4374 2.43443 19.003 0 16 0C12.9969 0 10.5625 2.43443 10.5625 5.43745C10.5625 8.44047 12.9969 10.8749 16 10.8749Z" fill="#2405F2" />
                                    <path d="M27 10.8749C28.8984 10.8749 30.4374 9.33593 30.4374 7.43747C30.4374 5.53901 28.8984 4 27 4C25.1015 4 23.5625 5.53901 23.5625 7.43747C23.5625 9.33593 25.1015 10.8749 27 10.8749Z" fill="#2405F2" />
                                    <path d="M4.99997 10.8749C6.89843 10.8749 8.43744 9.33593 8.43744 7.43747C8.43744 5.53901 6.89843 4 4.99997 4C3.10151 4 1.5625 5.53901 1.5625 7.43747C1.5625 9.33593 3.10151 10.8749 4.99997 10.8749Z" fill="#2405F2" />
                                    <path d="M8.3868 13.9615C7.03369 12.8528 5.80826 12.9996 4.24371 12.9996C1.90373 12.9996 0 14.8921 0 17.2177V24.0432C0 25.0532 0.824368 25.8745 1.83811 25.8745C6.21469 25.8745 5.68745 25.9537 5.68745 25.6857C5.68745 20.8491 5.11458 17.3022 8.3868 13.9615Z" fill="#2405F2" />
                                    <path d="M17.4882 13.0249C14.7555 12.797 12.3802 13.0275 10.3314 14.7187C6.90288 17.4649 7.56268 21.1625 7.56268 25.6861C7.56268 26.8829 8.53642 27.8748 9.75141 27.8748C22.9439 27.8748 23.469 28.3003 24.2513 26.5679C24.5078 25.9821 24.4375 26.1682 24.4375 20.5636C24.4375 16.112 20.583 13.0249 17.4882 13.0249Z" fill="#2405F2" />
                                    <path d="M27.7564 13.0004C26.1833 13.0004 24.9646 12.8552 23.6133 13.9623C26.8611 17.2783 26.3126 20.5832 26.3126 25.6865C26.3126 25.9562 25.8749 25.8753 30.0963 25.8753C31.1463 25.8753 32.0001 25.0247 32.0001 23.9791V17.2185C32.0001 14.8929 30.0963 13.0004 27.7564 13.0004Z" fill="#2405F2" />
                                </svg>
                                <h3 className='text-2xl py-3'>Uses Client First</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-5 sm:pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 0C7.21187 0 0 7.21187 0 16C0 24.7881 7.21187 32 16 32C24.7881 32 32 24.7881 32 16C32 7.21187 24.7881 0 16 0ZM14.0637 23.2775L7.05713 16.271L9.7085 13.6196L14.1864 18.0975L23.1759 9.9255L25.6991 12.6996L14.0637 23.2775Z" fill="#2405F2" />
                                </svg>
                                <h3 className='text-2xl py-3'>Two Free Revision Round</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-5 sm:pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <g clip-path="url(#clip0_757_976)">
                                        <path d="M2.64172 9.89299L9.89237 2.64235L8.68379 1.43377C6.68481 -0.565208 3.43213 -0.565208 1.43341 1.43404C0.464898 2.40229 -0.0683594 3.68964 -0.0683594 5.05923C-0.0683594 6.42856 0.464898 7.71617 1.43341 8.68442L2.64172 9.89299Z" fill="#2405F2" />
                                        <path d="M4.0918 11.3426L6.992 8.44238L11.1478 12.5982L8.24757 15.4984L4.0918 11.3426Z" fill="#2405F2" />
                                        <path d="M8.44238 6.992L11.3426 4.0918L15.4984 8.24731L12.5982 11.1475L8.44238 6.992Z" fill="#2405F2" />
                                        <path d="M24.9643 30.764C24.9643 30.7643 24.9643 30.7643 24.964 30.7643L24.4863 31.2423L33.5261 34.8581C33.6494 34.9075 33.7784 34.9315 33.9066 34.9315C34.1736 34.9315 34.4358 34.8271 34.6318 34.6311C34.9218 34.3411 35.011 33.9061 34.8588 33.5251L31.243 24.4854L24.9643 30.764Z" fill="#2405F2" />
                                        <path d="M19.3652 26.615L22.2654 23.7148L25.6888 27.1384L22.7886 30.0386L19.3652 26.615Z" fill="#2405F2" />
                                        <path d="M23.7148 22.2657L26.615 19.3652L30.0386 22.7888L27.1384 25.689L23.7148 22.2657Z" fill="#2405F2" />
                                        <path d="M8.80609 27.5075C8.40555 27.9078 8.40555 28.5572 8.80609 28.9575L11.4646 31.616L8.44934 34.6313C8.04907 35.0318 7.39965 35.0318 6.99937 34.6313L0.232049 27.864C-0.168495 27.4637 -0.168495 26.8143 0.232049 26.414L26.414 0.232049C26.8143 -0.168495 27.4637 -0.168495 27.864 0.232049L34.6313 6.99911C34.8316 7.19938 34.9317 7.46187 34.9317 7.72436C34.9317 7.98658 34.8316 8.24907 34.6313 8.44934L31.616 11.4646L27.9908 7.83918C27.5903 7.43864 26.9411 7.43864 26.5406 7.83918C26.1403 8.23973 26.1403 8.88887 26.5406 9.28942L30.1658 12.9146L27.8757 15.2049L25.2172 12.5461C24.8169 12.1458 24.1675 12.1458 23.7669 12.5461C23.3667 12.9467 23.3667 13.5958 23.7669 13.9963L26.4255 16.6549L24.1354 18.9452L20.5103 15.3197C20.1097 14.9195 19.4606 14.9195 19.06 15.3197C18.6597 15.7203 18.6597 16.3694 19.06 16.77L22.6852 20.3952L20.3952 22.6855L17.7366 20.0269C17.3361 19.6264 16.6869 19.6264 16.2864 20.0269C15.8861 20.4272 15.8861 21.0764 16.2864 21.4769L18.9449 24.1354L16.6549 26.4258L13.0297 22.8003C12.6292 22.4 11.98 22.4 11.5795 22.8003C11.1792 23.2008 11.1792 23.85 11.5795 24.2505L15.2047 27.8757L12.9146 30.166L10.2561 27.5075C9.85579 27.107 9.20637 27.107 8.80609 27.5075Z" fill="#2405F2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_757_976">
                                            <rect width="35" height="35" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className='text-2xl py-3'>Template Customization</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-5 sm:pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <g clip-path="url(#clip0_757_984)">
                                        <path d="M34.9994 23.686C34.9994 19.3427 32.5078 15.4665 28.7761 13.5811C28.6602 21.9086 21.9086 28.6602 13.5811 28.7761C15.4665 32.5078 19.3427 34.9994 23.686 34.9994C25.7223 34.9994 27.7026 34.4571 29.4426 33.4266L34.95 34.95L33.4266 29.4426C34.4571 27.7026 34.9994 25.7223 34.9994 23.686Z" fill="#2405F2" />
                                        <path d="M26.7285 13.3643C26.7285 5.99506 20.7335 0 13.3643 0C5.99506 0 0 5.99506 0 13.3643C0 15.7659 0.639267 18.1043 1.85318 20.1572L0.0491333 26.6791L6.57131 24.8753C8.62423 26.0892 10.9626 26.7285 13.3643 26.7285C20.7335 26.7285 26.7285 20.7335 26.7285 13.3643ZM11.3135 10.2539H9.2627C9.2627 7.99217 11.1025 6.15234 13.3643 6.15234C15.626 6.15234 17.4658 7.99217 17.4658 10.2539C17.4658 11.4019 16.9798 12.5052 16.132 13.2807L14.3896 14.8754V16.4746H12.3389V13.9723L14.7475 11.7677C15.1779 11.3738 15.415 10.8363 15.415 10.2539C15.415 9.12304 14.4951 8.20312 13.3643 8.20312C12.2334 8.20312 11.3135 9.12304 11.3135 10.2539ZM12.3389 18.5254H14.3896V20.5762H12.3389V18.5254Z" fill="#2405F2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_757_984">
                                            <rect width="35" height="35" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className='text-2xl py-3'>24/7 Support</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-5 sm:pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <g clip-path="url(#clip0_757_919)">
                                        <path d="M29.3038 9.94438L31.656 7.59354C32.2263 7.02479 32.2263 6.10167 31.656 5.53146C31.0858 4.96125 30.1642 4.96125 29.594 5.53146L27.2417 7.88229C24.9463 5.985 22.0865 4.74542 18.9583 4.44938V2.91667H21.875C22.6815 2.91667 23.3333 2.26333 23.3333 1.45833C23.3333 0.653333 22.6815 0 21.875 0H13.125C12.3185 0 11.6667 0.653333 11.6667 1.45833C11.6667 2.26333 12.3185 2.91667 13.125 2.91667H16.0417V4.44938C8.28042 5.18583 2.1875 11.7367 2.1875 19.6875C2.1875 28.1313 9.05625 35 17.5 35C25.9438 35 32.8125 28.1313 32.8125 19.6875C32.8125 15.9892 31.4942 12.5942 29.3038 9.94438ZM18.9583 19.6875C18.9583 20.494 18.305 21.1458 17.5 21.1458C16.695 21.1458 16.0417 20.494 16.0417 19.6875V11.6667C16.0417 10.8602 16.695 10.2083 17.5 10.2083C18.305 10.2083 18.9583 10.8602 18.9583 11.6667V19.6875Z" fill="#2405F2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_757_919">
                                            <rect width="35" height="35" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className='text-2xl py-3'>Quick Delivery</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                        <div className='sec-4-text'>
                            <div className='p-8 bg-white pt-5 sm:pt-20'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path d="M25.866 5.80537C25.866 5.0077 25.5547 4.25677 24.9905 3.69259L22.1734 0.8755C21.6171 0.319082 20.8273 0 20.0413 0H19.8701V5.97656H25.8661L25.866 5.80537Z" fill="#2405F2" />
                                    <path d="M18.1911 20.5552C18.3818 19.9764 18.7145 19.4375 19.1483 19.0008L25.8927 12.2836V7.96875H18.8934C18.3429 7.96875 17.9297 7.52323 17.9297 6.97266V0H2.98828C1.34048 0 0 1.34048 0 2.98828V31.0117C0 32.6595 1.34048 34 2.98828 34H22.8778C24.5256 34 25.8927 32.6595 25.8927 31.0117V23.5775L24.798 24.6455C24.3545 25.0852 23.8351 25.4052 23.2494 25.6008L20.0822 26.6582L19.5997 26.6845C18.802 26.6845 18.0472 26.2963 17.5783 25.6466C17.1134 24.9997 16.9869 24.1612 17.2398 23.4034L18.1911 20.5552ZM4.98047 17.9297H14.9091C15.4596 17.9297 15.9052 18.3752 15.9052 18.9258C15.9052 19.4764 15.4596 19.9219 14.9091 19.9219H4.98047C4.42989 19.9219 3.98438 19.4764 3.98438 18.9258C3.98438 18.3752 4.42989 17.9297 4.98047 17.9297ZM3.98438 14.9414C3.98438 14.3908 4.42989 13.9453 4.98047 13.9453H14.9091C15.4596 13.9453 15.9052 14.3908 15.9052 14.9414C15.9052 15.492 15.4596 15.9375 14.9091 15.9375H4.98047C4.42989 15.9375 3.98438 15.492 3.98438 14.9414ZM3.98438 22.9102C3.98438 22.3596 4.42989 21.9141 4.98047 21.9141H14.9091C15.4596 21.9141 15.9052 22.3596 15.9052 22.9102C15.9052 23.4607 15.4596 23.9062 14.9091 23.9062H4.98047C4.42989 23.9062 3.98438 23.4607 3.98438 22.9102ZM18.8934 27.8906C19.444 27.8906 19.8895 28.3361 19.8895 28.8867C19.8895 29.4373 19.4441 29.8828 18.8934 29.8828H12.9169C12.3663 29.8828 11.9208 29.4373 11.9208 28.8867C11.9208 28.3361 12.3663 27.8906 12.9169 27.8906H18.8934ZM4.98047 11.9531C4.42989 11.9531 3.98438 11.5076 3.98438 10.957C3.98438 10.4065 4.42989 9.96094 4.98047 9.96094H18.8934C19.444 9.96094 19.8895 10.4065 19.8895 10.957C19.8895 11.5076 19.444 11.9531 18.8934 11.9531H4.98047Z" fill="#2405F2" />
                                    <path d="M19.9956 21.4365L19.129 24.0364C18.9991 24.4259 19.3697 24.7964 19.7592 24.6663L22.3575 23.7985L19.9956 21.4365Z" fill="#2405F2" />
                                    <path d="M27.7321 13.2354L21.1719 19.7956L24.0011 22.6248C25.4838 21.1418 28.3689 18.2564 30.561 16.0643L27.7321 13.2354Z" fill="#2405F2" />
                                    <path d="M33.4149 10.3777C33.0648 10.0256 32.5492 9.82422 32.0025 9.82422C31.4557 9.82422 30.9402 10.0256 30.5881 10.3787L29.1406 11.8262L31.9694 14.6549C32.7618 13.8624 33.3095 13.3147 33.417 13.2074C34.1951 12.4281 34.195 11.1588 33.4149 10.3777Z" fill="#2405F2" />
                                </svg>
                                <h3 className='text-2xl py-3'>Hands-on approach</h3>
                                <p className='leading-7 pr-12'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section - 4 - end ===== */}

            {/* ===== Section - 5 - start ===== */}

            <section id='sec-5'>
                <div className='container grid grid-cols-1 sm:grid-cols-2 text-center sm:text-start py-10'>
                    <div className=''>
                        <h2 className='text-4xl font-bold py-3'>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl font-bold py-3'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>
                        <div className='pt-5 flex justify-between'>
                            <div className='flex'>
                                <img src={img3}></img>
                                <div className='pl-5'>
                                    <p>Jenny Wilson</p>
                                    <p>Vice President</p>
                                </div>
                            </div>
                            <div className='pt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="48" viewBox="0 0 108 48" fill="none">
                                    <ellipse cx="83.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA" />
                                    <path d="M77.4141 35L76 31.7805L85.0305 24.0894L76 16.2195L77.4141 13L89 23.374V25.1626L77.4141 35Z" fill="white" />
                                    <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.0995 24)" fill="white" />
                                    <path opacity="0.6" d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z" fill="#282938" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== Section - 5 - end ===== */}

            {/* ===== Section - 6 - Start ===== */}

            <section id='sec-6' className='py-10'>
                <div className='container lg:flex'>
                    <div className='flex-initial lg:w-1/3 pb-10' >
                        <h4 className='text-3xl text-center sm:text-start pr-0 sm:pr-36 py-5'>Frequently asked questions</h4>
                        <p className='text-blue-500'>Contact us for more info</p>
                    </div>
                    <div className='flex-initial lg:w-2/3'>
                        <div>
                            <h5 className='flex justify-between py-2'>
                                <span className='text-xl font-bold'>
                                    <span className='pr-3 sm:pr-12 text-blue-700'>01</span>
                                    How much time does it take?</span>
                                <span className='cursor-pointer' onClick={clk}>
                                    <svg className='cross hide' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.7" d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="#282938" />
                                    </svg></span></h5>
                            <p className='hide px-20 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                        <div>
                            <h5 className='flex justify-between py-2'>
                                <span className='text-xl font-bold'>
                                    <span className='pr-3 sm:pr-12 text-blue-700'>02</span>
                                    What is your class naming convention?</span>
                                <span className='cursor-pointer' onClick={clk}>
                                    <svg className='cross hide' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.7" d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="#282938" />
                                    </svg></span></h5>
                            <p className='hide px-20 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                        <div>
                            <h5 className='flex justify-between py-2'>
                                <span className='text-xl font-bold'>
                                    <span className='pr-3 sm:pr-12 text-blue-700'>03</span>
                                    How do you communicate?</span>
                                <span className='cursor-pointer' onClick={clk}>
                                    <svg className='cross hide' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.7" d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="#282938" />
                                    </svg></span></h5>
                            <p className='hide px-20 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                        <div>
                            <h5 className='flex justify-between py-2'>
                                <span className='text-xl font-bold'>
                                    <span className='pr-3 sm:pr-12 text-blue-700'>04</span>
                                    I have a bigger project. Can you handle it?</span>
                                <span className='cursor-pointer' onClick={clk}>
                                    <svg className='cross hide' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.7" d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="#282938" />
                                    </svg></span></h5>
                            <p className='hide px-20 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                        <div>
                            <h5 className='flex justify-between py-2'>
                                <span className='text-xl font-bold'>
                                    <span className='pr-3 sm:pr-12 text-blue-700'>05</span>
                                    What is your class naming convention?</span>
                                <span className='cursor-pointer' onClick={clk}>
                                    <svg className='cross hide' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.7" d="M16 8.71198H8.88802V16H7.11198V8.71198H0V7.28802H7.11198V0H8.88802V7.28802H16V8.71198Z" fill="#282938" />
                                    </svg></span></h5>
                            <p className='hide px-20 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section - 6 - end ===== */}

            {/* ===== Section - 7 - start ===== */}

            <section id='sec-7' className='py-10'>
                <div className='container lg:flex text-white'>
                    <div id='sec-7-bg-img' className='flex-1 mb-5'>
                        <h4 className='text-4xl py-10 sm:pt-20 sm:pr-72 sm:pl-20 sm:pb-5'>Building stellar websites for early startups</h4>
                        <p className='py-3 sm:pr-48 sm:pl-20 sm:pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div style={{ backgroundColor: "#1C1E53", height: "520px" }} className='flex-1 p-0 sm:p-10'>
                        <h2 className='text-2xl pb-3 pl-10'>Send inquiry</h2>
                        <p className='pb-5 pl-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                        <form className='px-10'>
                            <input type='text' placeholder='Your Name' className='bg-transparent p-3 border border-gray-700 rounded-lg w-full pl-8'></input> <br /><br />
                            <input type='email' placeholder='Email' className='bg-transparent p-3 border border-gray-700 rounded-lg w-full pl-8'></input><br /><br />
                            <input type='url' placeholder='Paste your Figma design URL' className='bg-transparent p-3 border border-gray-700 rounded-lg w-full pl-8'></input><br /><br />
                            <button type='button' className='w-full bg-yellow-200 p-3 rounded-full text-black font-bold'>Send an Inquiry</button><br /><br />
                            <p className='text-center arw-h inline-block pl-36 sm:pl-52 lg:pl-36' >Get in touch with us</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* ===== Section - 7 - end ===== */}

            {/* ===== Section - 8 - start ===== */}

            <section id='sec-8' className='py-10'>
                <div className='container'>
                    <h4 className='font-bold text-3xl pb-8'>Our blog</h4>
                    <div id='sec-8-users' className='w-full md:flex gap-4'>
                        <div className='md:flex-1'>
                            <img src={user1} className='pb-5'></img>
                            <span>19 Jan 2022</span>
                            <h4 className='py-4 text-xl font-bold'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                            <p className='pb-4'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <span className='pb-5 inline-block font-bold arw-h'>Read More</span>
                        </div>
                        <div className='md:flex-1'>
                            <img src={user2} className='pb-5'></img>
                            <span>19 Jan 2022</span>
                            <h4 className='py-4 text-xl font-bold'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                            <p className='pb-4'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <span className='pb-5 inline-block font-bold arw-h'>Read More</span>
                        </div>
                        <div className='md:flex-1'>
                            <img src={user3} className='pb-5'></img>
                            <span>19 Jan 2022</span>
                            <h4 className='py-4 text-xl font-bold'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                            <p className='pb-4'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                            <span className='pb-5 inline-block font-bold arw-h'>Read More</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== Section - 8 - end ===== */}

            {/* ===== Section - 9 - start ===== */}

            <section id='sec-9' style={{ backgroundColor: "#1C1E53" }}>
                <div className='container text-white md:flex pt-12'>
                    <div className='flex-1 p-0 lg:pr-56 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="38" viewBox="0 0 156 38" fill="none">
                            <path d="M151.461 4.77433V13.641H154.552V17.9282H151.461V25.9179C151.461 26.6975 151.653 27.282 152.04 27.6718C152.426 28.0615 153.006 28.2564 153.779 28.2564C154.165 28.2564 156 28.2564 156 28.2564V33.3231C156 33.3231 152.619 33.3231 152.136 33.3231C150.591 33.3231 148.659 33.0308 147.307 31.7641C145.954 30.4974 145.375 28.841 145.375 26.5026V17.8308H142.574V13.5436H145.375V4.77433H151.461ZM133.397 33.7128C130.596 33.7128 128.181 32.7385 126.539 30.9846C124.8 29.2308 124.027 26.8923 124.027 24.1641V23.4821C124.027 20.4615 124.8 18.0256 126.346 16.0769C127.891 14.2256 130.113 13.2513 133.011 13.2513C135.619 13.2513 137.744 14.0307 139.193 15.5897C140.739 17.2461 141.414 19.3898 141.414 22.118V25.3333H130.306V25.4307C130.403 26.5026 130.886 27.1846 131.562 27.8667C132.238 28.5487 133.204 28.841 134.266 28.841C135.426 28.841 136.295 28.7436 136.971 28.5487C137.647 28.3538 138.613 28.0616 139.579 27.5744L141.028 31.3743C140.159 32.0564 139.096 32.5436 137.744 33.0308C136.392 33.518 134.846 33.7128 133.397 33.7128ZM132.914 17.9282C132.045 17.9282 131.369 18.2205 130.982 18.9025C130.596 19.5846 130.306 20.4615 130.209 21.4359L130.306 21.5333H135.522V21.0462C135.522 19.9743 135.329 19.2923 134.943 18.8051C134.363 18.1231 133.783 17.9282 132.914 17.9282ZM113.016 33.7128C110.214 33.7128 107.799 32.7385 106.157 30.9846C104.516 29.2308 103.646 26.8923 103.646 24.1641V23.4821C103.646 20.4615 104.419 18.0256 105.964 16.0769C107.51 14.2256 109.731 13.2513 112.629 13.2513C115.238 13.2513 117.362 14.0307 118.812 15.5897C120.26 17.1487 121.033 19.3898 121.033 22.118V25.3333H109.925V25.4307C110.021 26.5026 110.504 27.1846 111.181 27.8667C111.856 28.5487 112.822 28.841 113.885 28.841C115.044 28.841 115.913 28.7436 116.59 28.5487C117.266 28.3538 118.232 28.0616 119.198 27.5744L120.647 31.3743C119.777 32.0564 118.715 32.5436 117.362 33.0308C116.107 33.518 114.561 33.7128 113.016 33.7128ZM112.629 17.9282C111.76 17.9282 111.084 18.2205 110.698 18.9025C110.311 19.5846 110.021 20.4615 109.925 21.4359L110.021 21.5333H115.238V21.0462C115.238 19.9743 115.044 19.2923 114.658 18.8051C114.078 18.1231 113.499 17.9282 112.629 17.9282ZM94.5664 24.9436L96.6912 13.4462H102.197L97.7537 33.2256H92.6342L89.4469 22.7026H89.3499L86.1626 33.2256H81.0432L76.5031 13.5436H82.1056L84.2305 25.1385H84.3268L87.4184 13.5436H91.2821L94.5664 24.9436ZM68.9684 27.6718C68.9684 27.1846 68.6787 26.6975 68.0993 26.3077C67.5199 25.9179 66.5538 25.5282 65.1047 25.2359C62.8831 24.7487 61.1443 24.0667 59.9852 23.1897C58.8261 22.2154 58.2465 20.9487 58.2465 19.2923C58.2465 17.5385 59.0193 16.0769 60.3716 14.8103C61.8205 13.5436 63.7526 13.0564 66.1671 13.0564C68.6787 13.0564 70.8036 13.641 72.2527 14.8103C73.7982 15.9795 74.4746 17.441 74.3775 19.3897V19.4872H68.5824C68.5824 18.7077 68.389 18.1231 68.0023 17.7333C67.6163 17.3436 66.9399 17.1487 66.1671 17.1487C65.4914 17.1487 65.0084 17.3436 64.5253 17.7333C64.0423 18.1231 63.8489 18.5129 63.8489 19.0974C63.8489 19.6821 64.1386 20.0718 64.6217 20.4615C65.1047 20.8513 66.1671 21.1436 67.6163 21.4359C69.9345 21.9231 71.7696 22.6052 72.8321 23.4821C73.9915 24.4564 74.5709 25.7231 74.5709 27.4769C74.5709 29.2308 73.7982 30.6923 72.2527 31.8615C70.7072 33.0308 68.6787 33.6153 66.1671 33.6153C63.5592 33.6153 61.4342 32.9333 59.8886 31.5692C58.3432 30.2051 57.667 28.7436 57.7636 26.9897V26.8923H63.2695C63.2695 27.8667 63.5592 28.5487 64.1386 28.841C64.7187 29.1333 65.4914 29.5231 66.3605 29.5231C67.2296 29.5231 67.8096 29.3282 68.1957 29.0359C68.775 28.7436 68.9684 28.2564 68.9684 27.6718ZM42.6948 13.4462L42.888 16.1744C43.5641 15.2 44.3369 14.4206 45.2063 13.9334C46.1722 13.3487 47.1381 13.0564 48.2973 13.0564C50.1326 13.0564 51.6781 13.7385 52.7406 14.9077C53.8032 16.0769 54.3827 18.1231 54.3827 20.8513V33.2256H48.4905V20.9487C48.4905 19.7795 48.2973 19.0974 47.8143 18.6102C47.3314 18.1231 46.6552 17.9282 45.7858 17.9282C45.2063 17.9282 44.7233 18.0257 44.2403 18.2205C43.7574 18.4154 43.371 18.7077 43.0812 19.0974V33.3231H37.0923V13.5436H42.6948V13.4462ZM33.4218 9.74361H27.3363V4.77433H33.4218V9.74361ZM33.4218 33.3231H27.3363V13.5436H33.4218V33.3231ZM14.0062 33.3231V17.7333H11.205V13.4462H14.0062V11.4C14.0062 9.15898 14.6824 7.40514 15.9381 6.13849C17.2904 4.87184 19.3189 4.57949 20.7679 4.57949C21.2508 4.57949 24.6316 4.57949 24.6316 4.57949V9.54871C24.6316 9.54871 22.7963 9.54871 22.41 9.54871C21.6372 9.54871 21.0576 9.74361 20.6713 10.1333C20.2849 10.5231 20.0917 11.1077 20.0917 11.8872V13.3487H23.8589V17.6359H20.0917V33.1282H14.0062V33.3231ZM2.41487 6.43078C2.41487 0.487184 5.50588 0 10.722 0V4.67694C8.30713 4.67694 7.34117 5.06668 7.34117 6.52823V14.2256C7.34117 15.9795 7.43778 17.8308 5.98885 19C7.43778 20.1692 7.34117 21.9231 7.34117 23.7744V31.4718C7.34117 33.0308 8.30713 33.3231 10.722 33.3231V38C5.50588 38 2.41487 37.5128 2.41487 31.5692V23.7744C2.41487 22.5077 2.41487 21.1436 0 21.1436V19.0974V17.0513C2.41487 17.0513 2.41487 15.5898 2.41487 14.4205V6.43078Z" fill="white" />
                        </svg>
                        <p className='py-3 sm:pb-14'>We are always open to discuss your project and improve your online presence.</p>
                        <div className='flex p-3 text-black' style={{ backgroundColor: "#FCD980" }} >
                            <div>
                                <h6>Email me at</h6>
                                <p>contact@website.com</p>
                            </div>
                            <div className='pl-5'>
                                <h6>Call us</h6>
                                <p>0927 6277 28525</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 p-0 lg:pr-56 py-5 md:pl-5'>
                        <h2 className='font-bold text-4xl'>Lets Talk!</h2>
                        <p className='py-3'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className='flex gap-5 py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_2258_358)">
                                    <path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2258_358">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g clip-path="url(#clip0_2258_360)">
                                    <path d="M5.69945 14.5005C11.7357 14.5005 15.0382 9.49829 15.0382 5.16173C15.0382 5.0211 15.0351 4.87735 15.0288 4.73673C15.6713 4.27213 16.2257 3.69666 16.666 3.03735C16.0677 3.30356 15.4324 3.47741 14.782 3.55298C15.4669 3.14243 15.9797 2.49747 16.2254 1.73767C15.5811 2.11953 14.8764 2.3889 14.1416 2.53423C13.6466 2.0082 12.992 1.6599 12.2791 1.54319C11.5663 1.42648 10.8348 1.54786 10.1978 1.88855C9.56088 2.22925 9.05388 2.77029 8.75525 3.42803C8.45661 4.08577 8.38297 4.82357 8.5457 5.52735C7.24101 5.46188 5.96464 5.12296 4.79934 4.53255C3.63403 3.94215 2.60581 3.11345 1.78133 2.10017C1.36228 2.82265 1.23405 3.67759 1.4227 4.49122C1.61135 5.30485 2.10272 6.01612 2.79695 6.48048C2.27577 6.46393 1.766 6.32361 1.30977 6.0711V6.11173C1.3093 6.86992 1.57141 7.60488 2.05156 8.19167C2.5317 8.77846 3.20023 9.18086 3.94352 9.33048C3.46072 9.46257 2.954 9.48182 2.46258 9.38673C2.67232 10.0388 3.0804 10.6091 3.62986 11.018C4.17933 11.427 4.84276 11.6542 5.52758 11.668C4.36497 12.5812 2.9288 13.0766 1.45039 13.0742C1.18821 13.0738 0.926282 13.0578 0.666016 13.0261C2.16792 13.9897 3.91504 14.5014 5.69945 14.5005Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2258_360">
                                        <rect width="16" height="16" fill="white" transform="translate(0.666016)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <g clip-path="url(#clip0_2258_362)">
                                    <path d="M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.24648 14.0813 2.97773 13.9063 2.69961 13.6281C2.41836 13.3469 2.24648 13.0813 2.10273 12.7094C1.99336 12.4281 1.86211 12.0031 1.82773 11.225C1.79023 10.3813 1.78086 10.1281 1.78086 7.99375C1.78086 5.85625 1.79023 5.60313 1.82773 4.7625C1.86211 3.98125 1.99336 3.55938 2.10273 3.27813C2.24648 2.90625 2.42148 2.6375 2.69961 2.35938C2.98086 2.07812 3.24648 1.90625 3.61836 1.7625C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C4.18711 0.084375 3.60273 0.221875 3.09648 0.41875C2.56836 0.625 2.12148 0.896875 1.67773 1.34375C1.23086 1.7875 0.958984 2.23438 0.752734 2.75938C0.555859 3.26875 0.418359 3.85 0.380859 4.7C0.343359 5.55625 0.333984 5.82812 0.333984 8C0.333984 10.1719 0.343359 10.4438 0.380859 11.2969C0.418359 12.1469 0.555859 12.7313 0.752734 13.2375C0.958984 13.7656 1.23086 14.2125 1.67773 14.6562C2.12148 15.1 2.56836 15.375 3.09336 15.5781C3.60273 15.775 4.18398 15.9125 5.03398 15.95C5.88711 15.9875 6.15898 15.9969 8.33086 15.9969C10.5027 15.9969 10.7746 15.9875 11.6277 15.95C12.4777 15.9125 13.0621 15.775 13.5684 15.5781C14.0934 15.375 14.5402 15.1 14.984 14.6562C15.4277 14.2125 15.7027 13.7656 15.9059 13.2406C16.1027 12.7313 16.2402 12.15 16.2777 11.3C16.3152 10.4469 16.3246 10.175 16.3246 8.00313C16.3246 5.83125 16.3152 5.55938 16.2777 4.70625C16.2402 3.85625 16.1027 3.27188 15.9059 2.76562C15.709 2.23438 15.4371 1.7875 14.9902 1.34375C14.5465 0.9 14.0996 0.625 13.5746 0.421875C13.0652 0.225 12.484 0.0875 11.634 0.05C10.7777 0.009375 10.5059 0 8.33399 0Z" fill="white" />
                                    <path d="M8.33398 3.89062C6.06523 3.89062 4.22461 5.73125 4.22461 8C4.22461 10.2688 6.06523 12.1094 8.33398 12.1094C10.6027 12.1094 12.4434 10.2688 12.4434 8C12.4434 5.73125 10.6027 3.89062 8.33398 3.89062ZM8.33398 10.6656C6.86211 10.6656 5.66836 9.47188 5.66836 8C5.66836 6.52813 6.86211 5.33437 8.33398 5.33437C9.80586 5.33437 10.9996 6.52813 10.9996 8C10.9996 9.47188 9.80586 10.6656 8.33398 10.6656Z" fill="white" />
                                    <path d="M13.5652 3.72891C13.5652 4.26016 13.134 4.68828 12.6059 4.68828C12.0746 4.68828 11.6465 4.25703 11.6465 3.72891C11.6465 3.19766 12.0777 2.76953 12.6059 2.76953C13.134 2.76953 13.5652 3.20078 13.5652 3.72891Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2258_362">
                                        <rect width="16" height="16" fill="white" transform="translate(0.333984)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_2258_367)">
                                    <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2258_367">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section - 9 - end ===== */}

        </>
    )
}

export default Home