export default function Heading({ as: Tag = 'h2', id, anchorLabel = '本段落的永久連結', children }) {
  return (
    <Tag id={id}>
      {children}{' '}
      <a className="anchor-link" href={`#${id}`} aria-label={anchorLabel}>
        #
      </a>
    </Tag>
  )
}
