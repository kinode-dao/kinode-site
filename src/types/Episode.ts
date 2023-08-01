export type Episode = {
  title: string
  link: string
  isoDate: string
  guid: string
  content: string 
  contentSnippet: string
  enclosure: {
    url: string
    length: number
    type: string
  }
  itunes: {
    duration: string
    episode: string
    explicit: 'yes' | 'no'
    image: string
  }
}