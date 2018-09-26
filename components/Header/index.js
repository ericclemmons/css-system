export default function Header({ children }) {
  return (
    <header>
      {children}

      <style jsx>{`
        background: var(--color-secondary);
        padding: var(--metric-space);
        color: white;
      `}</style>
    </header>
  )
}
