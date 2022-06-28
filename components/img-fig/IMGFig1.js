import useSWR from 'swr'
import FigureImage from 'react-bootstrap/FigureImage'

const IMGFig1 = ({ sectionClass }) => {
  const { data: ads } = useSWR('/ads-banner.php')

  if (!ads) {
    return null
  }

  return (
    <section className={`${sectionClass}`}>
      <div className='figureIMG1 d-flex justify-content-center'>
        <a
          href={ads.ads_banner[2].banner_link}
          target='_blank'
          rel='noreferrer'
        >
          <FigureImage
            width='320px'
            height='320px'
            alt={ads.ads_banner[2].banner_image}
            src={ads.ads_banner[2].banner_image}
          />
        </a>
      </div>
    </section>
  )
}

export default IMGFig1
