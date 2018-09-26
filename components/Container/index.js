export default function Container({ children }) {
  return (
    <section>
      {children}

      <style jsx>{`
        margin: var(--metric-space) var(--metric-space);
      `}</style>
    </section>
  )
}
