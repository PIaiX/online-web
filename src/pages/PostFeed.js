import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import TextAbout from '../components/utilities/TextAbout';
import { IoChevronDown } from "react-icons/io5";

export default function PostFeed() {
    return (
        <main>
            <Header className="d-none d-md-flex" />
            <h2 className="h1">Актуальное</h2>
            <section className="px-3 px-sm-0 topical my-profile my-2 my-sm-4 my-lg-5">
                <button type='button' data-bs-toggle="modal" data-bs-target="#announcement" className='btn-add me-2 me-sm-3 me-lg-4'>
                    <div className='photo'>
                        <div className='wrapper'>
                            <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 28V0.999999" stroke="url(#paint_linear)" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M28 15L0.999999 15" stroke="url(#paint_linear)" strokeWidth="2" strokeLinecap="round"/>
                                <defs>
                                    <linearGradient id="paint_linear" x1="13.7736" y1="14.4491" x2="15.2368" y2="14.4491" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF512F"/>
                                    <stop offset="1" stopColor="#F09819"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='title mt-1 mt-xl-2'>Добавить</div>
                </button>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    freeMode={true}
                    navigation
                    breakpoints={{
                        991: {
                            spaceBetween: 20,
                        },
                        1200: {
                            spaceBetween: 25,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <h2 className="h1">Лента</h2>
            <section className="row">
                <div className="col-7">
                    <div className="post-card">
                        <div className="top mb-3">
                            <div className="d-flex align-items-center">
                                <div className="photo empty">
                                    <img src="../img/users/empty-photo.svg" alt="Пользователь"/>
                                </div>
                                <div className="ms-3">
                                    <div>@evgenievaaa</div>
                                    <div>Вероника Евгеньева</div>
                                </div>
                            </div>
                            <ul className="list-unstyled d-flex align-items-center">
                                <li>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/ribbon.png" alt="Закладки"/>
                                    </button>
                                </li>
                                <li className="ms-3">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/user-add.png" alt="Добавить в подписки"/>
                                    </button>
                                </li>
                                <li className="ms-2">
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/drop-menu.png" alt="Меню"/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="main mb-3">
                            <img src="../img/img1.png" alt="post" className="post-img"/>
                            <ul className="list-unstyled">
                                <li>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/likes.png" alt="Нравится"/>
                                    </button>
                                    <div className="fs-09">123</div>
                                </li>
                                <li>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/messages.png" alt="Комментарии"/>
                                    </button>
                                    <div className="fs-09">123</div>
                                </li>
                                <li>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#announcement">
                                        <img src="../img/icons/share.png" alt="Поделиться"/>
                                    </button>
                                    <div className="fs-09">1.1k</div>
                                </li>
                                <li>
                                    <button type="button">
                                        <img src="../img/icons/views.png" alt="Просмотры"/>
                                    </button>
                                    <div className="fs-09">18.1k</div>
                                </li>
                            </ul>
                        </div>
                        <div className="descr">
                            <TextAbout className="mt-2 mt-sm-4" text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'} />
                        </div>
                        <div className="comments-box">
                            <button type="button" className="blue">
                                Сначала интересные
                                <IoChevronDown />
                            </button>
                            <div className="comments">

                            </div>
                            <button type="button" className="blue">Посмотреть все комментарии</button>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                Рекомендации для вас
                </div>
            </section>
        </main>
    )
}