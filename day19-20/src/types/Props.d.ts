/* FIXME */

/* cspell: disable */
interface Cat {
  weight: {
    imperial: string
    metric: string
  }
  id: string
  name: string
  // cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx"
  // vetstreet_url: "http://www.vetstreet.com/cats/abyssinian"
  // vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian"
  // temperament: "Active Energetic Independent Intelligent Gentle"
  origin: string
  // country_codes: "EG"
  // country_code: "EG"
  description: string
  life_span: string
  // indoor: 0
  // lap: 1
  // alt_names: ""
  // adaptability: 5
  // affection_level: 5
  // child_friendly: 3
  // dog_friendly: 4
  // energy_level: 5
  // grooming: 1
  // health_issues: 2
  // intelligence: 5
  // shedding_level: 2
  // social_needs: 5
  // stranger_friendly: 5
  // vocalisation: 1
  // experimental: 0
  // hairless: 0
  // natural: 1
  // rare: 0
  // rex: 0
  // suppressed_tail: 0
  // short_legs: 0
  // wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
  // hypoallergenic: 0
  // reference_image_id: "0XYvRd7oD"
  image?: {
    id: string
    // width: 1204
    // height: 1445
    url: string
  }
}
/* cspell: enable */

/* FIXME */
interface CatsProps { [] }


interface CatsGenInfo {
  count: string
  aveWeight: string
  aveLifeSpan: string
}
