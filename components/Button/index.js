export default function Button({ children }) {
  return (
    <button type="button">
      {children}
      <style jsx>{`
        white-space: nowrap;
        transition: all 0.2s var(--style-transition-bezier);
        display: inline-block;
        border: none;
        line-height: 2.4rem;
        letter-spacing: 0.012em;
        margin: 0;
        padding: 0 calc(var(--metric-space) * 2);
        font-size: var(--type-size--base);
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        text-align: center;
        appearance: none;
        color: var(--color-secondary);
        background: transparent;
        outline: none;
        border-radius: var(--metric-radius);
        background: var(--color-secondary);
        color: white;
        text-shadow: inherit;
        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.12),
          0 2px 6px rgba(0, 0, 0, 0.26);

        :hover {
          transform: translateY(-1px);
          text-shadow: 0 3px 1px rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.12),
            0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
        }

        :active {
          transform: translateY(1px);
          text-shadow: initial;
        }
      `}</style>
    </button>
  )
}
