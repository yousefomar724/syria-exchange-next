import useSWR from 'swr'
import Figure from 'react-bootstrap/Figure'

const IMGFig2 = ({ sectionClass }) => {
  const { data: ads } = useSWR('/ads-banner.php')

  if (!ads) {
    return null
  }

  return (
    <section className='cer'>
      <div className={sectionClass}>
        <Figure className='grid-col-span-9'>
          <a
            href={ads.ads_banner[0].banner_link}
            target='_blank'
            rel='noreferrer'
          >
            <Figure.Image
              width='100%'
              height='100%'
              alt={ads.ads_banner[0].banner_image}
              src={ads.ads_banner[0].banner_image}
            />
          </a>
        </Figure>
      </div>
    </section>
  )
}

export default IMGFig2
