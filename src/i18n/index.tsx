import React from 'react'
import I18n from "i18n-js"
import ru from "./lang/ru.json"
import lv from "./lang/lv.json"

const supportedLanguages = [
  {
    code: "ru",
    label: "Russian",
    translations: ru,
  },
  {
    code: "lv",
    label: "Latvian",
    translations: lv,
  },
]

I18n.defaultLocale = "ru"
supportedLanguages.forEach((lang) => {
  I18n.translations[lang.code] = lang.translations
})

export const languageOptions = supportedLanguages.map((lang) => ({
  value: lang.code,
  label: lang.label,
}))

export const setLocale = (locale) => {
  I18n.locale = locale
}

export const translate = (name, params = {}) => {
  return I18n.t(name, params)
}

export const Trans = (props) => (
  <span
    dangerouslySetInnerHTML={{ __html: translate(props.i18nKey, { ...props }) }}
  ></span>
)

export const defaultLocale = I18n.defaultLocale

export const useTranslation = (locale) => {
  I18n.locale = locale
  return I18n.t
}
