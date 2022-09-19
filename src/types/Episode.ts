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
}