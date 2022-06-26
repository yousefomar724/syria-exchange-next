import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const DEFAULT_DESCRIPTION =
  'سعر صرف الليرة السورية مقابل الدولار في جميع المحافظات و اسعار الذهب في سوريا سعر صرف الليرة السورية مقابل العملات  سعر صرف الليرة التركية اسعار الذهب في تركيا الليرة اليوم قيمة الليرة السورية صرف الليرة السورية سعر الدولار صرف الدولار تحويل الى سوريا'

const SEO = ({ title, description, imageUrl, ogType, articleTag }) => {
  const {
    i18n: { language },
  } = useTranslation()

  const baseTitle = language === 'ar' ? 'سوريا للصرافة' : 'Syria Exchange'

  return (
    <Helmet>
      <title>{title ? `${title} | ${baseTitle}` : baseTitle}</title>
      <meta
        name='description'
        content={description ? description : DEFAULT_DESCRIPTION}
      />

      {/* Facebook Open Graph */}
      <meta property='og:type' content={ogType ? ogType : 'website'} />
      <meta
        property='og:title'
        content={title ? `${title} | ${baseTitle}` : baseTitle}
      />
      <meta
        property='og:url'
        content={typeof window !== 'undefined' ? window.location.href : '/'}
      />
      <meta
        property='og:description'
        content={description ? description : DEFAULT_DESCRIPTION}
      />
      <meta
        property='og:image'
        content={
          imageUrl
            ? imageUrl
            : `${
                typeof window !== 'undefined' ? window.location.href : '/'
              }syria-exchange-share.jpg`
        }
      />
      <meata property='og:locale' content='ar_AR' />
      {ogType === 'article' && articleTag && (
        <meta property='article:tag' content={articleTag} />
      )}

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:title'
        content={title ? `${title} | ${baseTitle}` : baseTitle}
      />
      <meta
        property='twitter:image:src'
        content={
          imageUrl
            ? imageUrl
            : `${
                typeof window !== 'undefined' ? window.location.href : '/'
              }syria-exchange-share.jpg`
        }
      />
    </Helmet>
  )
}

export default SEO
