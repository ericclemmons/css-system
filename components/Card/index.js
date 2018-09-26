export default function Card({ children }) {
  return (
    <div>
      {children}

      <style jsx>{`
        width: 100%;
        margin-left: auto;
        overflow: hidden;
        margin-right: auto;
        background: var(--color-white, #ffffff);
        max-width: 100%;
        border-radius: var(--metric-radius);
        box-shadow: var(--style-shadow);
      `}</style>
    </div>
  )
}
