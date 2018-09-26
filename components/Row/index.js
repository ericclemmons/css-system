export default function Row({ children }) {
  return (
    <div>
      {children}

      <style jsx>{`
        display: grid;

        align-items: center;
        grid-template-columns: repeat(${children.length}, auto);
        grid-gap: var(--metric-space);
      `}</style>
    </div>
  )
}
