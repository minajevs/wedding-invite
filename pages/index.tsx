import { atcb_action, atcb_init } from 'add-to-calendar-button'
import React, { useCallback, useEffect } from 'react'
import "add-to-calendar-button/assets/css/atcb.css"

import Head from "@/components/Head"
import resolvePath from "@/utils/resolvePath"
import appConfig from "@/config/app"
import { useTranslation, defaultLocale } from "@/i18n"
import guestList from "./guest_list.json"

const translateConfig = (appConfig, locale) => {
  if (!locale || locale === defaultLocale) {
    return appConfig
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale]
  if (configLang === undefined) {
    throw new Error("invalid locale: ", locale)
  }
  return { ...appConfig, ...configLang }
}

const ShowInvite = ({ currentUrl, guest }) => {
  const t = useTranslation(guest.locale)
  useEffect(() => atcb_init(), [])

  // Initiate config variables
  const {
    logo,
    ogTags,
    coupleName,
    venue,
    weddingDay,
    weddingDate,
    weddingTime,
    calendarInfo,
    weddingTitle,
    weddingTimeStart
  } = translateConfig(appConfig, guest.locale)

  // Venue info
  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`

  // Event info
  const eventTitle = weddingTitle
  let eventDescription = `${weddingDateBrief}. ${venue.name}, ${venue.city}`

  // Invitation greeting
  const invitationGreetingKey = guest.type === 'male'
    ? 'invitationGreetingM'
    : guest.type === 'female'
      ? 'invitationGreetingF'
      : 'invitationGreetingP'

  const invitationIntroKey = guest.type === 'plural'
    ? 'invitationIntroP'
    : 'invitationIntroS'

  const invitationOutroKey = guest.type === 'plural'
    ? 'invitationOutroP'
    : 'invitationOutroS'

  const handleCalendar = useCallback(() => atcb_action({
    "name": eventTitle,
    "description": eventDescription,
    "startDate": "2022-10-13",
    "endDate": "2022-10-13",
    "startTime": "14:00",
    "endTime": "23:00",
    "location": `${venue.name}, ${venue.city}, ${venue.country}`,
    "options": [
      "Apple",
      "Google",
      "Microsoft365",
      "Outlook.com"
    ],
    "timeZone": "Europe/Riga",
    "iCalFileName": "Reminder-Event",
  }), [])

  return (
    <div>
      <Head
        {...ogTags}
        title={eventTitle}
        description={eventDescription}
        guestName={guest.name}
        url={currentUrl}
        date={weddingDateBrief}
        venue={venueBrief}
        logo={resolvePath(ogTags.logo)}
        author={resolvePath("/")}
      />
      <section className="header_area">
        <div id="home" className="header_slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1 }}>
              <div
                className="single_slider bg_cover d-flex align-items-center"
                style={{
                  height: "100vh",
                }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div
                        className="slider_content text-center"
                        style={{ paddingTop: 0 }}
                      >
                        <img
                          style={{ maxHeight: 100, margin: 25, marginTop: 0 }}
                          src={logo.headerLogo}
                          alt="rings logo"
                        />
                        <h5
                          className="slider_sub_title"
                          data-animation="fadeInUp"
                          data-delay="0.2s"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {t("siteIntro")}
                        </h5>
                        <h2
                          className="slider_title"
                          data-animation="fadeInUp"
                          data-delay="0.7s"
                          style={{ animationDelay: "0.7s" }}
                        >
                          {coupleName}
                        </h2>
                        <span
                          className="location"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          style={{ animationDelay: "1s" }}
                        >
                          Спасибо что были с нами!
                        </span>
                        <div
                          className="time"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          style={{ animationDelay: "1s" }}
                        >

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
          <img src="/assets/images/shape-1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div
                className="section_title pt-50 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}
              >
                <h3 className="title">Фотографии:</h3>
                <p
                  style={{
                    marginTop: '2.5rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <a href='https://soulpicturelv.gallery.photo/gallery/eva-dima/'>Доступны по ссылке</a>
                </p>
                <img src="/assets/images/section_shape.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
        <div className="coming_soon_shape_2">
          <img src="/assets/images/shape-2.png" alt="shape" />
        </div>
      </section>

      {/* Footer section */}
      <footer id="footer" className="footer_area">
        <div className="container" style={{ marginBottom: 40 }}>
          <div className="footer_widget pt-50 pb-10 text-center">
            <div className="footer_logo">
              <img src={logo.footerLogo} style={{ maxHeight: 100 }} alt="rings logo" />
            </div>
            <div className="footer_title">
              <h3 className="title">{coupleName}</h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale
  const emptyGuestParams = {
    guest: {
      guestId: "",
      name: "",
      greeting: "",
      locale: localeParams,
    },
  }

  const currentUrl = resolvePath(ctx.req.url)
  const guestId = ctx.query.u
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams,
    }
  }

  const guestData = guestList.data
  const { name, type, locale } =
    guestData.filter((guest) => guest.guestId === guestId)[0] || {}
  if (!name) {
    return {
      currentUrl,
      ...emptyGuestParams,
    }
  }

  return {
    currentUrl,
    guest: {
      name,
      type,
      guestId,
      locale: locale || localeParams,
    },
  }
}

export default ShowInvite
