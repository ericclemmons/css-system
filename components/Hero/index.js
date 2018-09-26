export default function Hero({ children }) {
  return (
    <section>
      {children}

      <style jsx>{`
        background: white;
        padding: calc(4 * var(--metric-space));
        text-align: center;
      `}</style>
    </section>
  )
}
