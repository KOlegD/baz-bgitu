import React, {ReactElement, useEffect, useState} from 'react';
import Link from 'next/link'
import {AnimatePresence, motion} from "framer-motion";
import {fadeIn, fadeUp, rightIn} from "../../motion";
import WoodCheckBox from "../../components/WoodCheckBox";

const Profile = () => {

    const [state, setState] = useState([
        {
            id: 1,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 2,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 3,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 4,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 5,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 6,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 7, name: 'Зубчатая деталь',

            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 8,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 9,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 10,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 11,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 12,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 13,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 14,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },
        {
            id: 15,
            name: 'Зубчатая деталь',
            image: 'https://i0.wp.com/tehpribory.ru/wp-content/uploads/2021/01/SHesterni-4.jpg?resize=400%2C358&ssl=1',
            param1: 'Высоты 30',
            param2: 'Ширина 30',
            param3: 'Толщина 30',
        },

    ])
    const [filters, setFilters] = useState([
        {
            name: 'ТехПроцесс',
            items: [
                {
                    name: 'Механическая обработка',
                    items: [
                        {
                            name: 'Фрезерные работы',
                            items: [
                                {
                                    name: 'Сталь',
                                },
                                {
                                    name: 'Чугун',
                                },
                                {
                                    name: 'Алюминий',
                                },
                                {
                                    name: 'Медь',
                                },
                                {
                                    name: 'Легированные стали',
                                },
                                {
                                    name: 'Полимерные материалы',
                                }
                            ],
                        },
                        {
                            name: 'Токарные работы',
                        },
                        {
                            name: 'Шлифование',
                        },
                        {
                            name: 'Раскрой',
                        },
                        {
                            name: 'Кузнечно-прессовые работы',
                        },
                        {
                            name: 'Обработка зубчатых колес',
                        },
                        {
                            name: 'Термическая обработка',
                        },
                        {
                            name: 'Нанесение износостойких покрытий',
                        }
                    ]
                },
                {
                    name: 'Литье',
                },
                {
                    name: 'Нанесение гальванических покрытий',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        },
        {
            name: 'Услуга',
            items: [
                {
                    name: 'Категория 1',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
                {
                    name: 'Категория 2',
                },
                {
                    name: 'Категория 3',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        },
        {
            name: 'Продукция',
            items: [
                {
                    name: 'Категория 1',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
                {
                    name: 'Категория 2',
                },
                {
                    name: 'Категория 3',
                    items: [
                        {
                            name: 'Подкатегория 1',
                        },
                        {
                            name: 'Подкатегория 2',
                        },
                        {
                            name: 'Подкатегория 3',
                        }
                    ]
                },
            ]
        }
    ])

    return (
        <>
            <div className={`container-fluid`}>
                <div className={`profile`}>
                    <div className={`profile-menu p-4`}>
                        <div className={`profile-menu-title mb-5`}>
                            <div className={`logo`}>
                                <Link href={`/home`}>
                                    <a>
                                        <img src="/logo.jpg" alt=""/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={`profile-menu-content`}>
                            <ul>
                                <li>
                                    <Link href={`/home`}>
                                        <a className={`profile-menu-link`}>
                                            Найти поставщика
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/supplier`}>
                                        <a className={`profile-menu-link`}>
                                            Стать поставщиком
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/contacts`}>
                                        <a className={`profile-menu-link`}>
                                            Банк контактов
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/news`}>
                                        <a className={`profile-menu-link`}>
                                            Новости и мероприятия
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/investments`}>
                                        <a className={`profile-menu-link`}>
                                            Инвестиционные предложения
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`profile-main p-4`}>
                        <div className={`profile-main-title mb-5`}>
                            <h2>
                                С возвращением в личный кабинет
                            </h2>
                        </div>
                        <div className={`row mb-5`}>
                            <div className={`col-4`}>
                                <motion.div
                                    variants={fadeUp}
                                    custom={4}
                                    initial={`initial`}
                                    animate={`animate`}
                                    className={`profile-main-card one`}>
                                    <div className={`title`}>
                                        ТехПроцесс
                                    </div>
                                    <div className={`count`}>
                                        1532
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`col-4`}>
                                <motion.div
                                    variants={fadeUp}
                                    custom={8}
                                    initial={`initial`}
                                    animate={`animate`}
                                    className={`profile-main-card two`}>
                                    <div className={`title`}>
                                        Услуга
                                    </div>
                                    <div className={`count`}>
                                        125
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`col-4`}>
                                <motion.div
                                    variants={fadeUp}
                                    custom={12}
                                    initial={`initial`}
                                    animate={`animate`}
                                    className={`profile-main-card three`}>
                                    <div className={`title`}>
                                        Продукция
                                    </div>
                                    <div className={`count`}>
                                        500
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className={`row`}>
                            <div className={`col-3`}>
                                <div className={`profile-filter`}>
                                    <div className="title">
                                        Фильтры отбора
                                    </div>
                                    <div className={`mt-5`}>
                                        <div className="checkbox-group">

                                            {
                                                filters.map((item, index) => (
                                                    <WoodCheckBox key={index} props={item} id={index}/>
                                                ))
                                            }
                                            <button className={`btn mt-4 btn-success rounded-pill`}>
                                                Применить фильтры
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={`profile-table`}>
                                    <div className={`d-flex align-items-center justify-content-between`}>
                                        <div className="title">
                                            Текущие предложения
                                        </div>
                                        <button className={`btn btn-sm btn-primary rounded-pill`}>
                                            Создать предложение
                                        </button>
                                    </div>
                                    <div className={`table mt-4`}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Наименование</th>
                                                <th>Параметр 1</th>
                                                <th>Параметр 2</th>
                                                <th>Параметр 3</th>
                                                <th/>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                state.map((item, i) => (
                                                    <motion.tr
                                                        variants={rightIn}
                                                        custom={i}
                                                        initial={`initial`}
                                                        animate={`animate`}
                                                        key={i}>
                                                        <td>
                                                            {item.id}
                                                        </td>
                                                        <td>
                                                            <div className={`d-flex align-items-center`}>
                                                                <div className={`img me-2`}>
                                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                    <img src={`${item.image}`} alt=""/>
                                                                </div>
                                                                <span>
                                                                    <Link href={`/product/${i}`}>
                                                                        <a>{item.name}</a>
                                                                    </Link>
                                                            </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {item.param1}
                                                        </td>
                                                        <td>
                                                            {item.param2}
                                                        </td>
                                                        <td>
                                                            {item.param3}
                                                        </td>
                                                        <td style={{
                                                            'width': '150px'
                                                        }}>
                                                            <div
                                                                className={`d-flex justify-content-between align-items-center`}>
                                                                <button
                                                                    className={`btn btn-sm rounded-pill btn-primary me-2`}>
                                                                    Изменить
                                                                </button>
                                                                <button
                                                                    className={`btn btn-sm rounded-pill btn-danger`}>
                                                                    Удалить
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </motion.tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`profile-sidebar p-4`}>
                        <div className={`profile-sidebar-title d-flex align-items-center justify-content-between mb-5`}>
                            <h2>Личный профиль</h2>
                            <button className={`btn btn-dark btn-sm rounded-pill`}>
                                Редактировать
                            </button>
                        </div>
                        <div className={`profile-sidebar-content`}>
                            <div className={`profile-sidebar-user d-flex align-items-center flex-column`}>
                                <div className={`profile-sidebar-avatar mb-3`}>
                                    <img src="/logo.jpg" alt=""/>
                                </div>
                                <div className={`profile-sidebar-name`}>
                                    Брянский автомобильный завод
                                </div>
                            </div>
                            <div className={``}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};





export default Profile;