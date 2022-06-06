import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Link from 'next/link'
import ReactStars from "react-rating-stars-component";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Home() {
    const ratings = {
        size: 20,
        value: 2.5, isHalf: true,
        edit: true, activeColor: "#3371E9", color: "#E5EFF6"
    };
    const reviews = {
        size: 30,
        value: 4.5, isHalf: true,
        edit: true, activeColor: "#3371E9", color: "#E5EFF6"
    };
    return (
        <>
            <Head>
                <title>Vivante</title>
                {/* <meta name="description" content="" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <nav className="bg-offWhite border-b-[1px] border-[#C4D1DB] h-16 flex justify-between px-10 items-center w-full text-black z-50">
                <div className="w-1/6">
                    <Link href="/">
                        <img className="cursor-pointer" alt="VIVANTE LOGO" src="./logoDark.png" width="150" />
                    </Link>
                </div>
                <div className="w-80 flex justify-end gap-x-10 items-center">
                    <button className="font-[600]">Become a Host</button>
                    <button>
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6662 2.6665H12.444V7.11095H14.2218V4.44428H26.6662C27.1996 4.44428 27.5551 4.79984 27.5551 5.33317V15.1109C27.5551 15.6443 27.1996 15.9998 26.6662 15.9998H15.1107V22.2221H10.3996L7.11068 24.7998V22.2221H4.44401C3.91068 22.2221 3.55512 21.8665 3.55512 21.3332V11.5554C3.55512 11.0221 3.91068 10.6665 4.44401 10.6665H15.9996V8.88873H4.44401C2.9329 8.88873 1.77734 10.0443 1.77734 11.5554V21.3332C1.77734 22.8443 2.9329 23.9998 4.44401 23.9998H5.3329V28.5332L10.9329 23.9998H16.8885V17.7776H26.6662C28.1773 17.7776 29.3329 16.6221 29.3329 15.1109V5.33317C29.3329 3.82206 28.1773 2.6665 26.6662 2.6665Z" fill="#212629" />
                            <path d="M5.51172 20.3554H7.64505L8.17839 18.9332H10.9339L11.4673 20.3554H13.6006L10.5784 12.4443H8.44505L5.51172 20.3554ZM9.51172 14.6666L10.4006 17.4221H8.62283L9.51172 14.6666Z" fill="#212629" />
                            <path d="M17.7773 15.1113C18.7551 15.1113 20.0885 14.8446 21.3329 14.2224C22.5773 14.8446 23.9996 15.1113 24.8885 15.1113V13.3335C24.8885 13.3335 23.9996 13.3335 23.0218 12.9779C24.0885 11.9113 24.8885 10.3113 24.8885 8.00016V7.11127H22.2218V5.3335H20.444V7.11127H17.7773V8.88905H23.0218C22.844 10.4891 22.1329 11.4668 21.3329 12.0891C20.7996 11.6446 20.2662 11.0224 19.9107 10.2224H18.044C18.3996 11.3779 18.9329 12.2668 19.644 12.9779C18.7551 13.3335 17.9551 13.3335 17.7773 13.3335V15.1113Z" fill="#212629" />
                        </svg>
                    </button>
                    <button>
                        <svg width="80" height="48" viewBox="0 0 86 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62 16C61.0111 16 60.0444 16.2932 59.2222 16.8427C58.3999 17.3921 57.759 18.173 57.3806 19.0866C57.0022 20.0002 56.9031 21.0055 57.0961 21.9755C57.289 22.9454 57.7652 23.8363 58.4645 24.5355C59.1637 25.2348 60.0546 25.711 61.0246 25.9039C61.9945 26.0969 62.9998 25.9978 63.9134 25.6194C64.8271 25.241 65.6079 24.6001 66.1574 23.7779C66.7068 22.9556 67 21.9889 67 21C67 19.6739 66.4732 18.4021 65.5355 17.4645C64.5979 16.5268 63.3261 16 62 16ZM62 24C61.4067 24 60.8266 23.8241 60.3333 23.4944C59.8399 23.1648 59.4554 22.6962 59.2284 22.148C59.0013 21.5999 58.9419 20.9967 59.0576 20.4147C59.1734 19.8328 59.4591 19.2982 59.8787 18.8787C60.2982 18.4591 60.8328 18.1734 61.4147 18.0576C61.9967 17.9419 62.5999 18.0013 63.1481 18.2284C63.6962 18.4554 64.1648 18.8399 64.4944 19.3333C64.8241 19.8266 65 20.4067 65 21C64.9992 21.7954 64.6829 22.558 64.1204 23.1204C63.558 23.6829 62.7954 23.9992 62 24Z" fill="#212629" />
                            <path d="M62 10C59.2311 10 56.5243 10.8211 54.222 12.3594C51.9197 13.8978 50.1253 16.0843 49.0657 18.6424C48.0061 21.2006 47.7288 24.0155 48.269 26.7313C48.8092 29.447 50.1426 31.9416 52.1005 33.8995C54.0584 35.8574 56.553 37.1908 59.2687 37.731C61.9845 38.2712 64.7994 37.9939 67.3576 36.9343C69.9157 35.8747 72.1022 34.0803 73.6406 31.778C75.1789 29.4757 76 26.7689 76 24C75.9958 20.2883 74.5194 16.7298 71.8948 14.1052C69.2702 11.4806 65.7117 10.0042 62 10ZM56 34.377V33C56.0008 32.2046 56.3171 31.442 56.8796 30.8796C57.442 30.3171 58.2046 30.0008 59 30H65C65.7954 30.0008 66.558 30.3171 67.1204 30.8796C67.6829 31.442 67.9992 32.2046 68 33V34.377C66.1792 35.4402 64.1085 36.0005 62 36.0005C59.8915 36.0005 57.8208 35.4402 56 34.377ZM69.992 32.926C69.9721 31.6143 69.4377 30.363 68.5039 29.4416C67.5702 28.5202 66.3118 28.0025 65 28H59C57.6882 28.0025 56.4298 28.5202 55.4961 29.4416C54.5623 30.363 54.0279 31.6143 54.008 32.926C52.1946 31.3068 50.9157 29.1749 50.3408 26.8127C49.7659 24.4505 49.9221 21.9693 50.7886 19.6979C51.6552 17.4264 53.1912 15.4717 55.1934 14.0926C57.1955 12.7135 59.5693 11.975 62.0005 11.975C64.4317 11.975 66.8055 12.7135 68.8076 14.0926C70.8098 15.4717 72.3458 17.4264 73.2124 19.6979C74.0789 21.9693 74.2351 24.4505 73.6602 26.8127C73.0853 29.1749 71.8064 31.3068 69.993 32.926H69.992Z" fill="#212629" />
                            <rect x="13" y="13.9165" width="22" height="3.66667" rx="1.83333" fill="#212629" />
                            <rect x="9.33203" y="22.1665" width="29.3333" height="3.66667" rx="1.83333" fill="#212629" />
                            <rect x="13" y="30.4165" width="22" height="3.66667" rx="1.83333" fill="#212629" />
                        </svg>
                    </button>
                </div>
            </nav>
            <section className="min-h-screen px-10 my-20 ">
                <div className="flex flex-col">
                    <h2 className=" text-3xl font-medium ">A Cozy Dome & Attic in Parvati Valley | Itsy Bitsy</h2>
                    <div className="flex gap-x-8 items-center">
                        <ReactStars {...ratings} />
                        <h4 className="text-base">48 reviews</h4>
                        <h4 className="text-base text-[#909BA3] hover:underline cursor-pointer">Fiano, Toscana, Italy</h4>
                    </div>
                </div>
                <div className="my-10 w-full flex gap-x-5 justify-center ">
                    <div className="w-4/6">
                        <img src="../product1.png" className="rounded-l-xl drop-shadow-md" />
                    </div>
                    <div className="w-4/6 grid grid-cols-2 gap-5">
                        <img src="../product2.png" className="drop-shadow-md" />
                        <img src="../product3.png" className="rounded-tr-xl drop-shadow-md" />
                        <img src="../product4.png" className="drop-shadow-md" />
                        <img src="../product5.png" className="rounded-br-xl drop-shadow-md" />
                    </div>
                </div>
                <div className="flex gap-x-20">
                    <div className="w-7/12 px-10">
                        <h3 className="text-2xl font-semibold">Dome hosted by Abhishek</h3>
                        <h4 className="text-base text-[#737D84]">3 guests ,  1 bedroom, 1 bed, 1 bathroom</h4>
                        <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                        <div className="my-5">
                            <div className="flex gap-x-5 items-center">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8415 16.9404L16.8332 11.655C17.4488 10.5048 17.7695 9.21523 17.7656 7.90554C17.7656 5.80886 16.947 3.79805 15.4897 2.31548C14.0324 0.832902 12.056 0 9.9951 0C7.93423 0 5.95776 0.832902 4.5005 2.31548C3.04325 3.79805 2.22457 5.80886 2.22457 7.90554C2.22075 9.21523 2.54144 10.5048 3.15703 11.655L0.148727 16.9404C0.0511085 17.1125 -0.000192338 17.3076 5.41884e-07 17.5062C0.000193421 17.7049 0.051873 17.8999 0.149826 18.0717C0.247778 18.2436 0.388539 18.3861 0.557907 18.4849C0.727276 18.5837 0.91926 18.6353 1.11449 18.6345H4.30041L5.92112 21.4127C5.97576 21.5048 6.04304 21.5885 6.12093 21.6612C6.32672 21.863 6.60108 21.9762 6.88689 21.9774H7.0423C7.20989 21.9541 7.37002 21.8921 7.51046 21.7962C7.6509 21.7003 7.76795 21.573 7.85265 21.424L9.9951 17.6745L12.1375 21.4579C12.2235 21.6047 12.3411 21.7298 12.4815 21.8237C12.6218 21.9176 12.7813 21.9779 12.9479 22H13.1033C13.393 22.0018 13.6718 21.8883 13.8804 21.6838C13.955 21.6152 14.0187 21.5352 14.0691 21.4466L15.6898 18.6684H18.8757C19.0713 18.6692 19.2636 18.6173 19.4332 18.5182C19.6028 18.419 19.7437 18.276 19.8415 18.1037C19.9452 17.928 20 17.727 20 17.5221C20 17.3171 19.9452 17.1161 19.8415 16.9404ZM6.87579 18.6684L5.88782 16.9856C5.79054 16.8187 5.6526 16.68 5.48733 16.5831C5.32205 16.4862 5.13501 16.4342 4.94425 16.4322H3.02382L4.61123 13.6314C5.70435 14.703 7.08206 15.4254 8.5742 15.7094L6.87579 18.6684ZM9.9951 13.5523C8.89734 13.5524 7.82423 13.2212 6.91147 12.6007C5.99872 11.9802 5.28731 11.0983 4.86722 10.0665C4.44712 9.03466 4.33721 7.89927 4.55137 6.8039C4.76553 5.70852 5.29415 4.70236 6.07039 3.91264C6.84662 3.12292 7.83561 2.58511 8.91227 2.36723C9.98894 2.14934 11.1049 2.26117 12.1191 2.68856C13.1333 3.11596 14.0002 3.83972 14.6101 4.76834C15.22 5.69695 15.5455 6.7887 15.5455 7.90554C15.5455 9.40316 14.9607 10.8395 13.9198 11.8984C12.8789 12.9574 11.4672 13.5523 9.9951 13.5523ZM15.0459 16.4322C14.8552 16.4342 14.6681 16.4862 14.5029 16.5831C14.3376 16.68 14.1997 16.8187 14.1024 16.9856L13.1144 18.6684L11.4271 15.6756C12.914 15.3858 14.2866 14.664 15.379 13.5975L16.9664 16.3983L15.0459 16.4322Z" fill="black" />
                                </svg>
                                <h3 className="font-semibold">Wayan is a Superhost</h3>
                            </div>
                            <p className="text-[#737D84] px-10">Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>
                        </div>
                        <div className="my-5">
                            <div className="flex gap-x-5 items-center">
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h3 className="font-semibold">Great location</h3>
                            </div>
                            <p className="text-[#737D84] px-10">100% of recent guests gave the location a 5-star rating.</p>
                        </div>
                        <div className="my-5">
                            <div className="flex gap-x-4 items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.673 2C7.85865 2 8.0367 2.07375 8.16797 2.20503C8.29925 2.3363 8.373 2.51435 8.373 2.7V4.009H15.89V2.709C15.89 2.52335 15.9637 2.3453 16.095 2.21403C16.2263 2.08275 16.4043 2.009 16.59 2.009C16.7757 2.009 16.9537 2.08275 17.085 2.21403C17.2162 2.3453 17.29 2.52335 17.29 2.709V4.009H20C20.5303 4.009 21.0388 4.21958 21.4139 4.59443C21.7889 4.96929 21.9997 5.47774 22 6.008V20.001C21.9997 20.5313 21.7889 21.0397 21.4139 21.4146C21.0388 21.7894 20.5303 22 20 22H4C3.46974 22 2.96118 21.7894 2.58614 21.4146C2.2111 21.0397 2.00027 20.5313 2 20.001V6.008C2.00027 5.47774 2.2111 4.96929 2.58614 4.59443C2.96118 4.21958 3.46974 4.009 4 4.009H6.973V2.699C6.97327 2.51352 7.04713 2.33573 7.17838 2.20467C7.30963 2.07361 7.48752 2 7.673 2V2ZM3.4 9.742V20.001C3.4 20.0798 3.41552 20.1578 3.44567 20.2306C3.47583 20.3034 3.52002 20.3695 3.57574 20.4253C3.63145 20.481 3.69759 20.5252 3.77039 20.5553C3.84319 20.5855 3.92121 20.601 4 20.601H20C20.0788 20.601 20.1568 20.5855 20.2296 20.5553C20.3024 20.5252 20.3685 20.481 20.4243 20.4253C20.48 20.3695 20.5242 20.3034 20.5543 20.2306C20.5845 20.1578 20.6 20.0798 20.6 20.001V9.756L3.4 9.742ZM8.667 16.619V18.285H7V16.619H8.667ZM12.833 16.619V18.285H11.167V16.619H12.833ZM17 16.619V18.285H15.333V16.619H17ZM8.667 12.642V14.308H7V12.642H8.667ZM12.833 12.642V14.308H11.167V12.642H12.833ZM17 12.642V14.308H15.333V12.642H17ZM6.973 5.408H4C3.92121 5.408 3.84319 5.42352 3.77039 5.45367C3.69759 5.48382 3.63145 5.52802 3.57574 5.58374C3.52002 5.63945 3.47583 5.70559 3.44567 5.77839C3.41552 5.85119 3.4 5.92921 3.4 6.008V8.343L20.6 8.357V6.008C20.6 5.92921 20.5845 5.85119 20.5543 5.77839C20.5242 5.70559 20.48 5.63945 20.4243 5.58374C20.3685 5.52802 20.3024 5.48382 20.2296 5.45367C20.1568 5.42352 20.0788 5.408 20 5.408H17.29V6.337C17.29 6.52265 17.2162 6.7007 17.085 6.83197C16.9537 6.96325 16.7757 7.037 16.59 7.037C16.4043 7.037 16.2263 6.96325 16.095 6.83197C15.9637 6.7007 15.89 6.52265 15.89 6.337V5.408H8.373V6.328C8.373 6.51365 8.29925 6.6917 8.16797 6.82297C8.0367 6.95425 7.85865 7.028 7.673 7.028C7.48735 7.028 7.3093 6.95425 7.17803 6.82297C7.04675 6.6917 6.973 6.51365 6.973 6.328V5.408Z" fill="black" />
                                </svg>
                                <h3 className="font-semibold">Free cancellation before 22 Jan.</h3>
                            </div>
                        </div>
                        <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                        <p className="text-[#737D84] px-2 text-justify">
                            A unique bamboo house and a work of art. Both the river valley view & interior are remarkable, providing such a marvelous feast to the eyes that guests find it extraordinary to live so in touch with nature but in complete luxury.
                            <br />
                            <br />
                            For more information, check the TED Talk with Elora Hardy about Sharma Springs . The Apple TV show HOME also features Sharma Springs.
                        </p>
                        <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                        <h3 className="text-2xl font-semibold">Where you'll sleep</h3>
                        <div className="my-10 flex gap-x-5">
                            <div className="w-2/6 px-10 py-5 rounded-xl shadow-lg border-[#C4D1DB] bg-[#F7FCFF] border">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9786 11.12V7.2C21.9786 5.44 20.5643 4 18.8357 4H13.5714C12.99 4 12.44 4.192 12 4.512C11.56 4.192 11.01 4 10.4286 4H5.16429C3.43571 4 2.02143 5.44 2.02143 7.2V11.12C1.39286 11.856 1 12.816 1 13.872V20H3.35714V17.6H20.6429V20H23V13.872C23 12.816 22.6071 11.856 21.9786 11.12ZM19.4643 9.6H13.1786V6.4H19.4643V9.6ZM4.53571 6.4H10.8214V9.6H4.53571V6.4ZM20.6429 15.2H3.35714V13.6C3.35714 12.72 4.06429 12 4.92857 12H19.0714C19.9357 12 20.6429 12.72 20.6429 13.6V15.2Z" fill="black" />
                                </svg>
                                <h3 className="font-semibold mt-5">Bedroom 1</h3>
                                <span className="text-xs text-[#737D84] ">1 king bed</span>
                            </div>
                            <div className="w-2/6 px-10 py-5 rounded-xl shadow-lg border-[#C4D1DB] bg-[#F7FCFF] border">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9786 11.12V7.2C21.9786 5.44 20.5643 4 18.8357 4H13.5714C12.99 4 12.44 4.192 12 4.512C11.56 4.192 11.01 4 10.4286 4H5.16429C3.43571 4 2.02143 5.44 2.02143 7.2V11.12C1.39286 11.856 1 12.816 1 13.872V20H3.35714V17.6H20.6429V20H23V13.872C23 12.816 22.6071 11.856 21.9786 11.12ZM19.4643 9.6H13.1786V6.4H19.4643V9.6ZM4.53571 6.4H10.8214V9.6H4.53571V6.4ZM20.6429 15.2H3.35714V13.6C3.35714 12.72 4.06429 12 4.92857 12H19.0714C19.9357 12 20.6429 12.72 20.6429 13.6V15.2Z" fill="black" />
                                </svg>
                                <h3 className="font-semibold mt-5">Bedroom 2</h3>
                                <span className="text-xs text-[#737D84] ">1 king bed</span>
                            </div>
                            <div className="w-2/6 px-10 py-5 rounded-xl shadow-lg border-[#C4D1DB] bg-[#F7FCFF] border">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9786 11.12V7.2C21.9786 5.44 20.5643 4 18.8357 4H13.5714C12.99 4 12.44 4.192 12 4.512C11.56 4.192 11.01 4 10.4286 4H5.16429C3.43571 4 2.02143 5.44 2.02143 7.2V11.12C1.39286 11.856 1 12.816 1 13.872V20H3.35714V17.6H20.6429V20H23V13.872C23 12.816 22.6071 11.856 21.9786 11.12ZM19.4643 9.6H13.1786V6.4H19.4643V9.6ZM4.53571 6.4H10.8214V9.6H4.53571V6.4ZM20.6429 15.2H3.35714V13.6C3.35714 12.72 4.06429 12 4.92857 12H19.0714C19.9357 12 20.6429 12.72 20.6429 13.6V15.2Z" fill="black" />
                                </svg>
                                <h3 className="font-semibold mt-5">Bedroom 3</h3>
                                <span className="text-xs text-[#737D84] ">1 king bed</span>
                            </div>
                        </div>
                        <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                        <h3 className="text-2xl font-semibold">What this place offers</h3>
                        <div className="text-[#737D84] gap-y-5 grid grid-cols-2 grid-rows-4 my-5">
                            <div>Kitchen</div>
                            <div>Wifi</div>
                            <div>Free parking on premises</div>
                            <div>Pool</div>
                            <div>TV</div>
                            <div>Air Conditioning</div>
                            <div>Garden</div>
                            <div>Cot</div>
                        </div>
                        <button className="border-black border px-5 py-2 hover:underline rounded-xl font-medium text-black">
                            Show all 21 amenities
                        </button>
                        <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                        <h3 className="text-2xl font-semibold">7 nights in Kanakamamidi</h3>
                        <h5 className="text-[#737D84] text-sm mt-1">Jun 20, 2022 - Jun 27, 2022</h5>
                        <div className="flex gap-x-10 mt-10 justify-center px-2">
                            <Calendar className="bg-[#F7FCFF] w-4/6" />
                        </div>

                    </div>
                    <div className="w-4/12 flex justify-center">
                        <div className="bg-[#F7FCFF] fit-content sticky top-10 p-5 w-5/6 border border-[#C4D1DB] rounded-xl shadow-lg">
                            <h2 className="text-3xl">₹53,600 night</h2>
                            <div className="flex mt-8 ">
                                <div className="capitalize border rounded-tl-xl border-[#737D84] space-y-1 px-3 py-1 w-3/6 text-xs">
                                    <h4>check-in</h4>
                                    <h5 className="text-lg text-[#737D84]">Add date</h5>
                                </div>
                                <div className="capitalize border border-[#737D84] space-y-1 rounded-tr-xl px-3 py-1 w-3/6 text-xs">
                                    <h4>checkout</h4>
                                    <h5 className="text-lg text-[#737D84]">Add date</h5>
                                </div>
                            </div>
                            <div className="capitalize border border-[#737D84] space-y-1 px-3 py-1 rounded-b-xl w-full text-xs">
                                <h4>Guests</h4>
                                <h5 className="text-lg text-[#737D84]">1 guest</h5>
                            </div>
                            <button className="text-2xl text-center btn-booking rounded-xl p-3 text-offWhite font-bold w-full mt-8">Book</button>
                        </div>
                    </div>
                </div>
                <div className="px-10">
                    <div className="h-[1.5px]  bg-[#C4D1DB] w-full my-6"></div>
                    <div className="flex items-center text-2xl">
                        <h3 className="font-semibold mr-5">48 reviews</h3>
                        <ReactStars {...reviews} />
                        <span className="ml-3 text-lg">4.5</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-5 my-10 text-[#737484]">
                        <div className="flex text-base justify-between items-center">
                            <h3>Cleanliness</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>
                        <div className="flex text-base justify-between items-center">
                            <h3>Communication</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>
                        <div className="flex text-base justify-between items-center">
                            <h3>Check-in</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>
                        <div className="flex text-base justify-between items-center">
                            <h3>Check-in</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>
                        <div className="flex text-base justify-between items-center">
                            <h3>Communication</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>
                        <div className="flex text-base justify-between items-center">
                            <h3>Cleanliness</h3>
                            <div className="flex gap-3 items-center">
                                <ReactStars {...ratings} />
                                <h4 className="text-base">2.5</h4>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-x-20 w-11/12 mx-10 gap-y-5 my-10 place-content-center">
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-black rounded-full"></div>
                                <div className="px-6">
                                    <h1 className="text-sm text-black">Arun Bhushan</h1>
                                    <h3 className="text-[#909BA3] text-xs">April 2022</h3>
                                </div>
                            </div>
                            <p className="text-justify pl-16">
                                We had a fun time staying at Serinity, it was such a lovely place built with passion. we had the privilege of the host comeby and show us the whole place and explain the story behind the...
                            </p>
                        </div>
                    </div>
                    <button className="border-black border px-5 py-2 hover:underline rounded-xl font-medium text-black">
                        Show all 21 reviews
                    </button>

                    <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                </div>

                <div className="px-10">
                    <div className=" flex gap-x-20">

                        <div className="w-3/6">
                            <div className="flex items-center">
                                <div className="h-20 w-20 bg-black rounded-full"></div>
                                <div className="px-4">
                                    <h1 className="text-2xl font-semibold text-black">Hosted by Abhishek</h1>
                                    <h3 className="text-[#909BA3] text-xs">Joined in March 2019</h3>
                                    <div className="flex gap-x-10 items-center my-3">
                                        <ReactStars {...ratings} />
                                        <div className="flex gap-x-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.18164 2.70952L12 2L14.0688 2.60094C16.1798 3.21416 18.4188 3.23569 20.5412 2.6632L23 2L20.7211 14.0537C20.4199 15.6466 19.487 17.0499 18.1346 17.944L12 22L5.86537 17.944C4.51304 17.0499 3.58007 15.6466 3.2789 14.0537L1 2L2.64999 2.51923C4.76768 3.18563 7.02874 3.25151 9.18164 2.70952Z" fill="url(#paint0_linear_159_1827)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9227 8.23294C17.0703 8.46637 17.0006 8.7752 16.7672 8.92273L10.0715 13.1545C9.60335 13.4503 8.98393 13.3094 8.68986 12.8402L7.07639 10.2656C6.92975 10.0316 7.00056 9.72303 7.23455 9.57639C7.46854 9.42975 7.7771 9.50056 7.92374 9.73455L9.53722 12.3091L16.2329 8.0774C16.4664 7.92987 16.7752 7.99951 16.9227 8.23294Z" fill="#F7FCFF" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_159_1827" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#3371E9" />
                                                        <stop offset="1" stop-color="#3392E9" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            Verified
                                        </div>
                                        <div className="flex gap-x-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.35938 0.5625H18.9994V4.2225L11.6794 8.7975L4.35938 4.2225V0.5625Z" fill="url(#paint0_linear_159_1823)" />
                                                <circle cx="11.6794" cy="16.1179" r="7.32" fill="url(#paint1_linear_159_1823)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_159_1823" x1="11.6794" y1="0.5625" x2="11.6794" y2="8.7975" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#3371E9" />
                                                        <stop offset="1" stop-color="#3392E9" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_159_1823" x1="11.6794" y1="8.79785" x2="11.6794" y2="23.4379" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#3371E9" />
                                                        <stop offset="1" stop-color="#3392E9" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            Super Vivante
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="text-justify pl-24 w-5/6 text-[#797A89] my-5">
                                I am business man by profession. I like travelling.. Love to meet new people and learn about new cultures.
                                <h5 className="text-sm text-black my-2 font-semibold">During your stay</h5>
                                Guests can call the host directly on phone or whatsapp
                                <h5 className="text-sm text-black my-2 font-semibold">Abhishek Sharma is a SuperVivante</h5>
                                SuperVivante are experienced, highly rated hosts who are committed to providing great stays for guests.
                            </div>

                        </div>
                        <div className="w-2/6 py-16 flex flex-col justify-center">
                            <h3 className="font-semibold">Response Time: <span className="font-normal ml-2">Within an hour</span></h3>
                            <h3 className="font-semibold">Response Rate:<span className="text-xl font-normal ml-2">89%</span></h3>

                            <button className="border-black border px-5 py-2 w-2/6 hover:underline my-10 rounded-xl font-medium text-black">
                                Contact Host
                            </button>
                        </div>
                    </div>
                    <div className="h-[1.5px] bg-[#C4D1DB] w-full my-6"></div>
                </div>

            </section >

            <Footer />
        </ >
    )
}
