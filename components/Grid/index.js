export default function Grid({ children }) {
  return (
    <div>
      {children}

      <style jsx>{`
        display: grid;
        grid-gap: var(--metric-space);
        grid-template-columns: var(--layout-grid-columns--cards);
      `}</style>
    </div>
  )
}
