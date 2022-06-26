import Figure from 'react-bootstrap/Figure'
import { useEffect, useState } from 'react'
const IMGFig2 = ({ sectionClass }) => {
  const [adds, setAdds] = useState()

  //Adds Fetch
  useEffect(() => {
    async function getAdds() {
      const request = fetch(
        'https://syria-exchange.com/panel/v1/api/ads-banner.php'
      )
      const response = await request
      const parsed = await response.json()
      setAdds(parsed)
    }
    getAdds()
  }, [])
  if (adds === undefined) {
    return null
  }
  return (
    <section className='cer'>
      <Figure className='grid-col-span-9'>
        <a
          href={adds.ads_banner[1].banner_link}
          target='_blank'
          rel='noreferrer'
        >
          <Figure.Image
            width='100%'
            height='100%'
            alt={adds.ads_banner[1].banner_image}
            src={adds.ads_banner[1].banner_image}
          />
        </a>
      </Figure>
    </section>
  )
}

export default IMGFig2
