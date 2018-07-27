import Link from 'next/link'

const ALink = (props) => {
  const { page, subpage } = props
  const linkName = props.name
  const linkAs = `${page ? '/'+page : ''}${subpage ? '/'+subpage : ''}`
  const linkParams = `${page ? '?page='+page : ''}
                      ${subpage ? '&subpage='+subpage : ''}`
  const linkHref = `${linkAs}/${linkParams}`

  return (
    <Link as={linkAs} href={linkHref}>
      <a>{linkName}</a>
    </Link>
  )
}
export default ALink

