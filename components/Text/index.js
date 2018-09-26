export default function Text({ as = "p", children }) {
  const Component = as

  return (
    <Component>
      {children}

      <style jsx>{`
        font-weight: normal;
        font-size: var(${`--type-size--${as}`});
        line-height: calc(1.25 * var(--type-size--ratio));
      `}</style>
    </Component>
  )
}
