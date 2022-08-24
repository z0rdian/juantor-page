import classes from '../layout/footer.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';

function Footer({ footerItems }) {
    return (
        <footer>
            {footerItems?.map((footerItem, i) => {
                return (
                    <Fragment key={i}>
                        <div className={`${classes.bg}`}>
                            <Container>
                                <Row>
                                    <Col lg={{ span: 3 }}>
                                        <div className={classes.widget__item}>
                                            <Link href='/'>
                                                <a className={classes.logo}>
                                                    <img
                                                        src={
                                                            footerItem?.footerLogo
                                                        }
                                                        alt={
                                                            footerItem?.footerLogoAlt
                                                        }
                                                    />
                                                </a>
                                            </Link>
                                            <p
                                                className={classes.desc}
                                                dangerouslySetInnerHTML={{
                                                    __html: footerItem?.excerpt,
                                                }}
                                            ></p>
                                            <div className={classes.inquary}>
                                                <h2
                                                    className={
                                                        classes.inquary_info
                                                    }
                                                >
                                                    {footerItem?.inquary}
                                                </h2>
                                                {/* <Link href='tel://+12345-879-854'>
                                                    <a
                                                        className={
                                                            classes.inquary_number
                                                        }
                                                    >
                                                        {
                                                            footerItem?.inquaryNumber
                                                        }
                                                    </a>
                                                </Link> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        xl={{ span: 3 }}
                                        lg={{ span: 2 }}
                                        sm={{ span: 6 }}
                                        className='ps-xl-80 pt-40 pt-lg-0'
                                    >
                                        {/* <div className={classes.widget__item}>
                                            <h2
                                                className={
                                                    classes.widget__title
                                                }
                                            >
                                                {footerItem?.informationTitle}
                                            </h2>
                                            <ul
                                                className={classes.widget__list}
                                            >
                                                {footerItem?.informationList?.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                href={`/${item.path}`}
                                                            >
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div> */}
                                    </Col>
                                    <Col
                                        lg={{ span: 3 }}
                                        sm={{ span: 6 }}
                                        className='ps-lg-50 pt-40 pt-lg-0'
                                    >
                                        {/* <div className={classes.widget__item}>
                                            <h2
                                                className={
                                                    classes.widget__title
                                                }
                                            >
                                                {footerItem?.quickLinkTitle}
                                            </h2>
                                            <ul
                                                className={classes.widget__list}
                                            >
                                                {footerItem?.quickLinkList?.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                href={`/${item.path}`}
                                                            >
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div> */}
                                    </Col>
                                    <Col
                                        xl={{ span: 3 }}
                                        lg={{ span: 4 }}
                                        className='pt-40 pt-lg-0'
                                    >
                                        <div className={classes.widget__item}>
                                            <h2
                                                className={
                                                    classes.widget__title
                                                }
                                            >
                                                {footerItem?.contactInfoTitle}
                                            </h2>
                                            {/* <div
                                                className={`pb-25 ${classes.widget__info}`}
                                            >
                                                <p
                                                    className={
                                                        classes.widget_address
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: footerItem?.widgetAddress,
                                                    }}
                                                ></p>
                                                <span
                                                    className={
                                                        classes.widget_number
                                                    }
                                                >
                                                    {footerItem?.widgetNumber}
                                                </span>
                                            </div> */}
                                            <div
                                                className={classes.widget__info}
                                            >
                                                <p
                                                    className={
                                                        classes.widget_address
                                                    }
                                                    dangerouslySetInnerHTML={{
                                                        __html: footerItem?.additionWidgetAddress,
                                                    }}
                                                ></p>
                                                <span
                                                    className={
                                                        classes.widget_number
                                                    }
                                                >
                                                    {
                                                        footerItem?.additionWidgetNumber
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className={classes.bottom}>
                            <Container>
                                <Row>
                                    <Col md={{ span: 6 }} sm={{ span: 4 }}>
                                        <ul className={classes.social}>
                                            {footerItem?.socialList?.map(
                                                (item, index) => {
                                                    const Social =
                                                        FaIcons[
                                                            item.socialIcon
                                                        ];
                                                    return (
                                                        <li key={index}>
                                                            <Link
                                                                href={`https://www.instagram.com/amarilla_construir/`}
                                                            >
                                                                <a>
                                                                    <Social />
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </Col>
                                    <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                        {/* <div className={classes.copyright}>
                                            <span className={classes.text}>
                                                © 2022 OxyBuild Made with
                                                <span className={classes.icon}>
                                                    <FaIcons.FaHeart />
                                                </span>
                                                by
                                                <a href='https://hasthemes.com/'>
                                                    HasThemes
                                                </a>
                                            </span>
                                        </div> */}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Fragment>
                );
            })}
        </footer>
    );
}

export default Footer;
