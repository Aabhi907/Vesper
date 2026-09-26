"use client"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  useState,
  type PointerEvent,
} from "react"

type Person = {
  id: number
  name: string
  role: string
  image: string
  objectPosition?: string
}

const people: Person[] = [
  {
    id: 1,
    name: "Aabishkar Shrestha",
    role: "Co-founder",
    image: "/team/aabishkar.jpg",
    objectPosition: "center 28%",
  },
  {
    id: 2,
    name: "Samrat Ghimere",
    role: "Co-founder & Engineer",
    image: "/team/samrat-ghimere.jpg",
    objectPosition: "center 25%",
  },
  {
    id: 3,
    name: "Kasam Thapa Magar",
    role: "Co-founder & Engineer",
    image: "/team/kasam-thapa-magar.png",
    objectPosition: "center 18%",
  },
]

function ProfileAvatar({ person }: { person: Person }) {
  const [visible, setVisible] = useState(false)

  const pointerX = useMotionValue(0)

  const tooltipX = useSpring(
    useTransform(pointerX, [-28, 28], [-22, 22]),
    {
      stiffness: 150,
      damping: 12,
      mass: 0.45,
    }
  )

  const tooltipRotation = useSpring(
    useTransform(pointerX, [-28, 28], [-9, 9]),
    {
      stiffness: 150,
      damping: 12,
      mass: 0.45,
    }
  )

  const handlePointerMove = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    const bounds =
      event.currentTarget.getBoundingClientRect()

    const distanceFromCenter =
      event.clientX - (bounds.left + bounds.width / 2)

    pointerX.set(distanceFromCenter)
  }

  const hideTooltip = () => {
    pointerX.set(0)
    setVisible(false)
  }

  return (
    <div className="tooltip-person">
      <div className="tooltip-positioner">
        <AnimatePresence>
          {visible && (
            <motion.div
              className="tooltip-card"
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.72,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.76,
              }}
              transition={{
                type: "spring",
                stiffness: 290,
                damping: 18,
              }}
              style={{
                x: tooltipX,
                rotate: tooltipRotation,
              }}
            >
              <span className="tooltip-light tooltip-light-blue" />
              <span className="tooltip-light tooltip-light-purple" />

              <strong>{person.name}</strong>
              <small>{person.role}</small>

              <span className="tooltip-arrow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        className="profile-avatar"
        aria-label={`${person.name}, ${person.role}`}
        onPointerEnter={() => setVisible(true)}
        onPointerMove={handlePointerMove}
        onPointerLeave={hideTooltip}
        onFocus={() => setVisible(true)}
        onBlur={hideTooltip}
        onClick={() =>
          setVisible((current) => !current)
        }
      >
        <img
          src={person.image}
          alt={person.name}
          style={{ objectPosition: person.objectPosition || "center top" }}
          draggable={false}
        />
      </button>
    </div>
  )
}

function AnimatedProfileTooltips() {
  return (
    <div className="profile-list">
      {people.map((person) => (
        <ProfileAvatar
          key={person.id}
          person={person}
        />
      ))}
    </div>
  )
}

export function TeamTooltips() {
  return (
    <section className="demo-page" id="team">
      <div className="demo-content">
        <div className="label">Meet the team</div>

        <h2 className="team-headline">
          The people behind Vesper.
        </h2>

        <p className="team-subtext">
          Hover, focus, or tap a profile to reveal more information.
        </p>

        <AnimatedProfileTooltips />
      </div>

      <style>{`
        .demo-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          overflow: hidden;
          padding: 88px 24px 96px;
          color: hsl(var(--ink));
          background: hsl(var(--canvas));
          border-top: 1px solid hsl(var(--line));
        }

        .demo-content {
          width: min(100%, 760px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 14px;
          border: 1px solid hsl(var(--line));
          border-radius: 999px;
          color: hsl(var(--muted));
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .team-headline {
          max-width: 670px;
          margin: 18px auto 0;
          font-size: clamp(34px, 5.5vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: hsl(var(--ink));
          text-align: center;
        }

        .team-subtext {
          max-width: 480px;
          margin: 16px auto 0;
          color: hsl(var(--muted));
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.6;
          text-align: center;
        }

        .profile-list {
          display: flex;
          width: fit-content;
          max-width: 100%;
          align-items: center;
          justify-content: center;
          margin: 28px auto 0;
          padding: 70px 18px 20px;
          isolation: isolate;
        }

        .tooltip-person {
          position: relative;
          margin-right: -15px;
        }

        .tooltip-person:last-child {
          margin-right: 0;
        }

        .tooltip-person:hover,
        .tooltip-person:focus-within {
          z-index: 20;
        }

        .profile-avatar {
          position: relative;
          display: block;
          width: clamp(56px, 9vw, 68px);
          height: clamp(56px, 9vw, 68px);
          overflow: hidden;
          padding: 0;
          border: 3.5px solid hsl(var(--canvas));
          border-radius: 50%;
          outline: none;
          background: #e5e5e5;
          box-shadow:
            0 8px 20px rgba(25, 20, 49, 0.13),
            0 0 0 1px rgba(20, 19, 26, 0.08);
          cursor: pointer;
          transition:
            transform 400ms cubic-bezier(
              0.22,
              1,
              0.36,
              1
            ),
            box-shadow 400ms ease;
        }

        .profile-avatar img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          user-select: none;
          transition: transform 500ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .tooltip-person:hover .profile-avatar,
        .profile-avatar:focus-visible {
          z-index: 5;
          transform: translateY(-6px) scale(1.12);
          box-shadow:
            0 18px 36px rgba(0, 0, 0, 0.18),
            0 0 0 4px rgba(0, 0, 0, 0.08);
        }

        .tooltip-person:hover .profile-avatar img,
        .profile-avatar:focus-visible img {
          transform: scale(1.08);
        }

        .profile-avatar:focus-visible {
          outline: 2px solid hsl(var(--ink));
          outline-offset: 4px;
        }

        .tooltip-positioner {
          position: absolute;
          bottom: calc(100% + 16px);
          left: 50%;
          z-index: 50;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .tooltip-card {
          position: relative;
          display: flex;
          min-width: max-content;
          flex-direction: column;
          align-items: center;
          padding: 12px 18px 13px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          background:
            linear-gradient(
              145deg,
              #18171f,
              #0c0c10
            );
          box-shadow:
            0 22px 50px rgba(15, 12, 28, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transform-origin: bottom center;
          white-space: nowrap;
        }

        .tooltip-card strong {
          position: relative;
          z-index: 2;
          font-size: 14.5px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.015em;
        }

        .tooltip-card small {
          position: relative;
          z-index: 2;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          font-weight: 450;
        }

        .tooltip-light {
          position: absolute;
          bottom: -1px;
          z-index: 3;
          height: 1px;
          pointer-events: none;
        }

        .tooltip-light-blue {
          left: 9%;
          width: 48%;
          background: linear-gradient(
            90deg,
            transparent,
            #3cddff,
            transparent
          );
          box-shadow: 0 0 10px
            rgba(60, 221, 255, 0.8);
        }

        .tooltip-light-purple {
          right: 7%;
          width: 43%;
          background: linear-gradient(
            90deg,
            transparent,
            #9d73ff,
            transparent
          );
          box-shadow: 0 0 10px
            rgba(157, 115, 255, 0.8);
        }

        .tooltip-arrow {
          position: absolute;
          bottom: -5px;
          left: 50%;
          z-index: 1;
          width: 10px;
          height: 10px;
          background: #0d0d11;
          transform: translateX(-50%) rotate(45deg);
        }

        @media (max-width: 600px) {
          .demo-page {
            padding: 60px 18px 70px;
          }

          .profile-list {
            margin-top: 16px;
            padding-right: 8px;
            padding-left: 8px;
          }

          .tooltip-person {
            margin-right: -13px;
          }

          .tooltip-card {
            padding-right: 14px;
            padding-left: 14px;
          }

          .tooltip-card strong {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .profile-avatar,
          .profile-avatar img {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}

export default TeamTooltips
