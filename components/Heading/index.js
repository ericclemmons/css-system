export default function Heading({ as = "h1", children }) {
  const Component = as

  return (
    <Component>
      {children}

      <style jsx>{`
        font-weight: 600;
        font-size: var(${`--type-size--${as}`});
        line-height: calc(1.25 * var(--type-size--ratio));
      `}</style>
    </Component>
  )
}
