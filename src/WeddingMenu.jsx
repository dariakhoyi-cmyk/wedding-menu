import { useState, useEffect, useRef } from "react";

const COLORS = {
  burgundy: "#6B2737",
  burgundyDeep: "#4A1525",
  burgundyLight: "#8B3A4A",
  ivory: "#FAF6EE",
  ivoryWarm: "#F5EED8",
  slate: "#8DA4C0",
  slateLight: "#B8CEDD",
  slatePale: "#DCE8F0",
  gold: "#C9A84C",
  goldLight: "#E2C97E",
  goldPale: "#F0E4B8",
  dark: "#1A0A0F",
  darkMid: "#2D1520",
};

// ─── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ───────────────────────
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL || "https://script.google.com/macros/s/AKfycbxiwA0fvKL5-wAGA_07dMTqJKJ7h8Akbav_jhDGggE_80rKzOWHpAHckOolzqy31DfR/exec";
// ───────────────────────────────────────────────────────────────────────────
  {
    id: "chicken-piccata",
    name: "Chicken Piccata",
    subtitle: "lemon, capers, asparagus, redskin potato mash",
    description: "Pan-seared chicken in a lemon-caper sauce.",
    tags: ["GF"],
    color: COLORS.goldLight,
    sides: [],
  },
  {
    id: "salmon-piccata",
    name: "Salmon Piccata",
    subtitle: "lemon, capers, asparagus, redskin potato mash",
    description: "Pan-seared salmon in a lemon-caper sauce.",
    tags: ["GF"],
    color: COLORS.slateLight,
    sides: [],
  },
  {
    id: "teriyaki-salmon",
    name: "Teriyaki Ginger Salmon",
    subtitle: "house teriyaki glaze, jasmine rice",
    description: "Pacific salmon with a ginger teriyaki glaze.",
    tags: [],
    color: COLORS.slate,
    sides: [],
  },
  {
    id: "tomato-pasta",
    name: "Cavatappi Primavera",
    subtitle: "tomato cream sauce, seasonal vegetables",
    description: "Cavatappi with San Marzano tomato cream sauce and fresh basil.",
    tags: ["V"],
    color: "#9DB88A",
    sides: [],
  },
];

function Butterfly({ style, delay, size = 1 }) {
  return (
    <div
      className="butterfly"
      style={{
        position: "absolute",
        pointerEvents: "none",
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      <svg
        width={28 * size}
        height={22 * size}
        viewBox="0 0 28 22"
        fill="none"
        style={{
          animation: `flutter ${2 + Math.random()}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          opacity: 0.7,
        }}
      >
        <ellipse
          cx="7" cy="9" rx="7" ry="5"
          fill={COLORS.burgundy}
          fillOpacity="0.5"
          transform="rotate(-20 7 9)"
        />
        <ellipse
          cx="21" cy="9" rx="7" ry="5"
          fill={COLORS.burgundy}
          fillOpacity="0.5"
          transform="rotate(20 21 9)"
        />
        <ellipse
          cx="8" cy="14" rx="5" ry="3.5"
          fill={COLORS.burgundyDeep}
          fillOpacity="0.6"
          transform="rotate(-30 8 14)"
        />
        <ellipse
          cx="20" cy="14" rx="5" ry="3.5"
          fill={COLORS.burgundyDeep}
          fillOpacity="0.6"
          transform="rotate(30 20 14)"
        />
        <ellipse cx="14" cy="11" rx="1.5" ry="5" fill={COLORS.dark} fillOpacity="0.8" />
        <path d="M13 6 Q14 4 15 6" stroke={COLORS.gold} strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}

function FloatingParticle({ style, delay }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: COLORS.goldLight,
        opacity: 0,
        animation: `floatUp ${6 + Math.random() * 4}s ease-in infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

function CalaLily({ style, flip = false }) {
  return (
    <svg
      width="60"
      height="120"
      viewBox="0 0 60 120"
      fill="none"
      style={{
        position: "absolute",
        pointerEvents: "none",
        transform: flip ? "scaleX(-1)" : undefined,
        opacity: 0.25,
        ...style,
      }}
    >
      <path
        d="M30 110 Q28 80 20 60 Q10 40 15 20 Q20 5 30 8 Q40 5 45 20 Q50 40 40 60 Q32 80 30 110Z"
        fill={COLORS.burgundyDeep}
        stroke={COLORS.burgundy}
        strokeWidth="0.5"
      />
      <path
        d="M30 80 Q30 60 30 45"
        stroke={COLORS.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <ellipse cx="30" cy="43" rx="4" ry="10" fill={COLORS.gold} opacity="0.5" />
    </svg>
  );
}

function PersianOrnament({ style }) {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      style={{ display: "block", ...style }}
    >
      <line x1="0" y1="12" x2="45" y2="12" stroke={COLORS.gold} strokeWidth="0.8" opacity="0.6" />
      <line x1="75" y1="12" x2="120" y2="12" stroke={COLORS.gold} strokeWidth="0.8" opacity="0.6" />
      <circle cx="60" cy="12" r="4" stroke={COLORS.gold} strokeWidth="1" fill="none" opacity="0.8" />
      <circle cx="60" cy="12" r="1.5" fill={COLORS.gold} opacity="0.8" />
      <circle cx="48" cy="12" r="2" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.5" />
      <circle cx="72" cy="12" r="2" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M52 12 Q56 8 60 12 Q64 16 68 12" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

function TagBadge({ tag }) {
  const config = {
    GF: { label: "Gluten-Free", bg: COLORS.slatePale, color: COLORS.burgundyDeep },
    V: { label: "Vegetarian", bg: "#E8F0E0", color: "#3A5A2A" },
  };
  const c = config[tag] || { label: tag, bg: COLORS.goldPale, color: COLORS.burgundyDeep };
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 10,
        fontFamily: "'Cormorant Garamond', serif",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "2px 9px",
        borderRadius: 20,
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.color}22`,
        marginRight: 6,
      }}
    >
      {c.label}
    </span>
  );
}

function MenuCard({ item, selected, onSelect, selectedSide, onSelectSide }) {
  const isSelected = selected === item.id;
  const hasSides = item.sides && item.sides.length > 0;
  return (
    <div
      onClick={() => onSelect(item.id)}
      style={{
        position: "relative",
        cursor: "pointer",
        borderRadius: 16,
        padding: "28px 30px",
        marginBottom: 18,
        background: isSelected
          ? `linear-gradient(135deg, #7FA8C0CC, #9BBDD499)`
          : `linear-gradient(135deg, ${COLORS.ivory}CC, ${COLORS.ivoryWarm}99)`,
        border: isSelected
          ? `1.5px solid #5A8FAA99`
          : `1px solid ${COLORS.slateLight}44`,
        boxShadow: isSelected
          ? `0 8px 40px #7FA8C033, 0 0 0 3px #7FA8C022`
          : `0 4px 20px ${COLORS.dark}0A`,
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      {isSelected && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            background: `radial-gradient(circle at 20% 50%, #7FA8C022, transparent 60%)`,
            pointerEvents: "none",
            animation: "gentlePulse 3s ease-in-out infinite",
          }}
        />
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div
          style={{
            flexShrink: 0,
            marginTop: 4,
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: isSelected ? `none` : `1.5px solid ${COLORS.slateLight}`,
            background: isSelected
              ? `radial-gradient(circle, ${COLORS.gold}, ${COLORS.burgundy})`
              : "transparent",
            boxShadow: isSelected ? `0 0 12px ${COLORS.gold}66` : "none",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isSelected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 700,
                color: isSelected ? `#1A2E3A` : COLORS.darkMid,
                letterSpacing: "0.02em",
              }}
            >
              {item.name}
            </h3>
          </div>

          <p
            style={{
              margin: 0,
              marginBottom: 10,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              fontWeight: 600,
              fontStyle: "italic",
              color: isSelected ? `#1A3A4A` : `#2A4A6B`,
              letterSpacing: "0.03em",
            }}
          >
            {item.subtitle}
          </p>

          <div style={{ marginBottom: 10 }}>
            {item.tags.map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
          </div>

          <p
            style={{
              margin: 0,
              fontFamily: "'EB Garamond', serif",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.7,
              color: isSelected ? `${COLORS.darkMid}EE` : COLORS.darkMid,
            }}
          >
            {item.description}
          </p>

          {/* Side selection — only shown when this card is selected and has sides */}
          {isSelected && hasSides && (
            <div
              style={{ marginTop: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 9.5,
                  letterSpacing: "0.2em",
                  color: COLORS.gold,
                  opacity: 0.8,
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                Choose Your Side
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {item.sides.map((side) => {
                  const sideSelected = selectedSide === side;
                  return (
                    <button
                      key={side}
                      onClick={() => onSelectSide(side)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: 20,
                        border: sideSelected
                          ? `1.5px solid ${COLORS.gold}99`
                          : `1px solid ${COLORS.slateLight}66`,
                        background: sideSelected
                          ? `linear-gradient(135deg, ${COLORS.burgundy}22, ${COLORS.gold}18)`
                          : `${COLORS.ivory}88`,
                        color: sideSelected ? COLORS.burgundyDeep : `${COLORS.darkMid}BB`,
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13.5,
                        fontStyle: "italic",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        boxShadow: sideSelected ? `0 4px 16px ${COLORS.gold}22` : "none",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {sideSelected && "✓ "}{side}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WeddingMenu() {
  const [step, setStep] = useState("menu"); // menu | details | confirmed
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedSide, setSelectedSide] = useState(null);
  const [guestName, setGuestName] = useState("");
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [error, setError] = useState("");

  const handleSelectMeal = (id) => {
    setSelectedMeal(id);
    setSelectedSide(null);
    setError("");
  };

  const butterflies = [
    { top: "15%", right: "8%", delay: 1.5, size: 0.9 },
    { top: "45%", left: "2%", delay: 3, size: 0.7 },
    { top: "60%", right: "5%", delay: 2, size: 1.0 },
    { top: "78%", left: "8%", delay: 4, size: 0.8 },
    { top: "25%", right: "3%", delay: 0.8, size: 1.1 },
  ];

  const particles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 5.5) % 100}%`,
    bottom: `-5%`,
    delay: i * 0.7,
    width: i % 3 === 0 ? 5 : 3,
    height: i % 3 === 0 ? 5 : 3,
  }));

  const handleContinue = () => {
    if (!selectedMeal) {
      setError("Please select your dinner choice to continue.");
      return;
    }
    setError("");
    setStep("details");
  };

  const handleConfirm = async () => {
    if (!guestName.trim()) {
      setError("Please enter your name.");
      return;
    }
    setError("");
    setStep("submitting");

    const payload = {
      timestamp: new Date().toISOString(),
      name: guestName.trim(),
      meal: selectedItem?.name || "",
      dietary: dietaryNotes.trim(),
    };

    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // no-cors means we can't read the response — submission still goes through
      console.log("Submitted:", payload);
    }

    setStep("confirmed");
  };

  const selectedItem = MENU_ITEMS.find((m) => m.id === selectedMeal);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Cinzel:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: ${COLORS.dark};
          min-height: 100vh;
          font-family: 'EB Garamond', serif;
        }

        @keyframes flutter {
          0%, 100% { transform: scaleX(1) rotate(-3deg); }
          50% { transform: scaleX(0.3) rotate(3deg); }
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          20% { opacity: 0.8; }
          80% { opacity: 0.4; }
          100% { opacity: 0; transform: translateY(-80vh) scale(1.2) rotate(45deg); }
        }

        @keyframes gentlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes driftButterfly {
          0% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-12px) translateX(8px); }
          66% { transform: translateY(5px) translateX(-5px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        .butterfly-wrap {
          animation: driftButterfly 8s ease-in-out infinite;
        }

        .page-content {
          animation: fadeSlideUp 1s ease forwards;
        }

        .menu-card:hover {
          transform: translateY(-2px);
        }

        input, textarea {
          font-family: 'EB Garamond', serif;
          outline: none;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.dark}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.burgundy}; border-radius: 2px; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: `
            radial-gradient(ellipse at 15% 20%, ${COLORS.burgundyDeep}66 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, ${COLORS.darkMid}99 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, ${COLORS.dark} 0%, #0D0508 100%)
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        {[
          { top: "10%", left: "20%", size: 300, color: COLORS.burgundy, opacity: 0.06, animDelay: "0s" },
          { top: "60%", right: "15%", size: 250, color: COLORS.slate, opacity: 0.07, animDelay: "3s" },
          { top: "35%", left: "60%", size: 200, color: COLORS.gold, opacity: 0.04, animDelay: "1.5s" },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: "fixed",
              top: orb.top,
              left: orb.left,
              right: orb.right,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: orb.color,
              opacity: orb.opacity,
              filter: "blur(80px)",
              pointerEvents: "none",
              animation: `orbFloat ${12 + i * 4}s ease-in-out infinite`,
              animationDelay: orb.animDelay,
            }}
          />
        ))}

        {/* Stars */}
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={`star-${i}`}
            style={{
              position: "fixed",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: i % 5 === 0 ? 3 : 1.5,
              height: i % 5 === 0 ? 3 : 1.5,
              borderRadius: "50%",
              background: COLORS.goldPale,
              opacity: 0.3,
              pointerEvents: "none",
              animation: `starTwinkle ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.3) % 5}s`,
            }}
          />
        ))}

        {/* Calla lilies */}
        <CalaLily style={{ bottom: 0, left: -15, transform: "rotate(10deg)" }} />
        <CalaLily style={{ bottom: 0, right: -15 }} flip />
        <CalaLily style={{ top: "30%", left: -20, transform: "rotate(15deg)", opacity: 0.12 }} />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <FloatingParticle
            key={i}
            style={{ left: p.left, bottom: p.bottom, width: p.width, height: p.height }}
            delay={p.delay}
          />
        ))}

        {/* Butterflies */}
        {butterflies.map((b, i) => (
          <div key={i} className="butterfly-wrap" style={{ position: "fixed", ...b, zIndex: 10 }}>
            <Butterfly delay={b.delay} size={b.size} />
          </div>
        ))}

        {/* Main content */}
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "60px 24px 80px",
            position: "relative",
            zIndex: 5,
          }}
        >
          {/* Header */}
          <div
            className="page-content"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            {/* Gold top ornament */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <svg width="180" height="32" viewBox="0 0 180 32" fill="none">
                <line x1="0" y1="16" x2="70" y2="16" stroke={COLORS.gold} strokeWidth="0.8" opacity="0.5" />
                <line x1="110" y1="16" x2="180" y2="16" stroke={COLORS.gold} strokeWidth="0.8" opacity="0.5" />
                <circle cx="90" cy="16" r="6" stroke={COLORS.gold} strokeWidth="1" fill="none" opacity="0.9" />
                <circle cx="90" cy="16" r="2" fill={COLORS.gold} opacity="0.9" />
                <circle cx="78" cy="16" r="3" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.5" />
                <circle cx="102" cy="16" r="3" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.5" />
                <path d="M82 16 Q86 10 90 16 Q94 22 98 16" stroke={COLORS.gold} strokeWidth="0.8" fill="none" opacity="0.6" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 11,
                letterSpacing: "0.3em",
                color: COLORS.gold,
                opacity: 0.8,
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              September 6, 2026 · Monte Bello Estate
            </p>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 52,
                fontWeight: 300,
                color: COLORS.ivory,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                marginBottom: 8,
                textShadow: `0 0 60px ${COLORS.burgundy}44`,
              }}
            >
              Daria & Andrew
            </h1>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontStyle: "italic",
                color: COLORS.slateLight,
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              An Evening in the Forest
            </p>

            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: 14,
                color: `${COLORS.ivory}66`,
                letterSpacing: "0.08em",
                marginTop: 16,
              }}
            >
              Sunday Reception · Dinner Selection
            </p>
          </div>

          {/* ── STEP: MENU ── */}
          {step === "menu" && (
            <div className="page-content" style={{ animationDelay: "0.2s" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${COLORS.darkMid}DD, ${COLORS.dark}EE)`,
                  border: `1px solid ${COLORS.gold}22`,
                  borderRadius: 20,
                  padding: "32px 28px",
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 20px 80px ${COLORS.dark}88, inset 0 1px 0 ${COLORS.gold}15`,
                }}
              >
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 400,
                      color: COLORS.ivory,
                      letterSpacing: "0.05em",
                      marginBottom: 8,
                    }}
                  >
                    Choose Your Dinner
                  </h2>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, color: `${COLORS.ivory}88`, fontStyle: "italic" }}>
                    Select one entrée for your evening
                  </p>
                  <PersianOrnament style={{ margin: "16px auto 0" }} />
                </div>

                {MENU_ITEMS.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    selected={selectedMeal}
                    onSelect={handleSelectMeal}
                    selectedSide={selectedMeal === item.id ? selectedSide : null}
                    onSelectSide={setSelectedSide}
                  />
                ))}

                {error && (
                  <p style={{ color: COLORS.burgundyLight, fontFamily: "'EB Garamond', serif", fontSize: 14, textAlign: "center", marginTop: 8, fontStyle: "italic" }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={handleContinue}
                  style={{
                    marginTop: 24,
                    width: "100%",
                    padding: "16px 24px",
                    borderRadius: 12,
                    border: `1px solid ${COLORS.gold}55`,
                    background: selectedMeal
                      ? `linear-gradient(135deg, ${COLORS.burgundy}, ${COLORS.burgundyDeep})`
                      : `${COLORS.darkMid}88`,
                    color: selectedMeal ? COLORS.ivory : `${COLORS.ivory}44`,
                    fontFamily: "'Cinzel', serif",
                    fontSize: 13,
                    letterSpacing: "0.2em",
                    cursor: selectedMeal ? "pointer" : "default",
                    transition: "all 0.3s ease",
                    boxShadow: selectedMeal ? `0 8px 30px ${COLORS.burgundy}44` : "none",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── STEP: DETAILS ── */}
          {step === "details" && (
            <div className="page-content" style={{ animationDelay: "0.1s" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${COLORS.darkMid}DD, ${COLORS.dark}EE)`,
                  border: `1px solid ${COLORS.gold}22`,
                  borderRadius: 20,
                  padding: "32px 28px",
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 20px 80px ${COLORS.dark}88, inset 0 1px 0 ${COLORS.gold}15`,
                }}
              >
                {/* Selected meal recap */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.burgundy}22, ${COLORS.gold}10)`,
                    border: `1px solid ${COLORS.gold}33`,
                    borderRadius: 12,
                    padding: "14px 18px",
                    marginBottom: 28,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${COLORS.gold}, ${COLORS.burgundy})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 0 12px ${COLORS.gold}44`,
                    }}
                  >
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5.5L5 9.5L13 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.2em", color: COLORS.gold, opacity: 0.7 }}>SELECTED</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: COLORS.ivory, fontWeight: 500 }}>
                      {selectedItem?.name}
                    </p>
                    {selectedSide && (
                      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: `${COLORS.ivory}77`, fontStyle: "italic", marginTop: 2 }}>
                        with {selectedSide}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setStep("menu")}
                    style={{
                      marginLeft: "auto",
                      background: "none",
                      border: "none",
                      color: `${COLORS.ivory}55`,
                      fontFamily: "'EB Garamond', serif",
                      fontSize: 13,
                      cursor: "pointer",
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}
                  >
                    change
                  </button>
                </div>

                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 26,
                    fontWeight: 400,
                    color: COLORS.ivory,
                    letterSpacing: "0.04em",
                    marginBottom: 6,
                  }}
                >
                  Confirm Your RSVP
                </h2>
                <PersianOrnament style={{ marginBottom: 24 }} />

                {/* Name input */}
                <label style={{ display: "block", marginBottom: 16 }}>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: COLORS.gold,
                      opacity: 0.7,
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    Your Full Name *
                  </p>
                  <input
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="As it appears on your invitation"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: 10,
                      border: `1px solid ${COLORS.gold}33`,
                      background: `${COLORS.dark}88`,
                      color: COLORS.ivory,
                      fontSize: 16,
                      letterSpacing: "0.02em",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = `${COLORS.gold}77`)}
                    onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}33`)}
                  />
                </label>

                {/* Dietary notes */}
                <label style={{ display: "block", marginBottom: 28 }}>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: COLORS.gold,
                      opacity: 0.7,
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    Dietary Notes & Allergies
                    <span style={{ color: `${COLORS.ivory}44`, marginLeft: 6, fontFamily: "'EB Garamond', serif", fontSize: 12, letterSpacing: "normal", fontStyle: "italic" }}>
                      optional
                    </span>
                  </p>
                  <textarea
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    placeholder="Any allergies, dietary restrictions, or notes for our kitchen…"
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: 10,
                      border: `1px solid ${COLORS.gold}33`,
                      background: `${COLORS.dark}88`,
                      color: COLORS.ivory,
                      fontSize: 15,
                      lineHeight: 1.6,
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = `${COLORS.gold}77`)}
                    onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}33`)}
                  />
                </label>

                {error && (
                  <p style={{ color: COLORS.burgundyLight, fontFamily: "'EB Garamond', serif", fontSize: 14, textAlign: "center", marginBottom: 12, fontStyle: "italic" }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={handleConfirm}
                  disabled={step === "submitting"}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    borderRadius: 12,
                    border: `1px solid ${COLORS.gold}55`,
                    background: `linear-gradient(135deg, ${COLORS.burgundy}, ${COLORS.burgundyDeep})`,
                    color: COLORS.ivory,
                    fontFamily: "'Cinzel', serif",
                    fontSize: 13,
                    letterSpacing: "0.2em",
                    cursor: step === "submitting" ? "default" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: `0 8px 30px ${COLORS.burgundy}44`,
                    opacity: step === "submitting" ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (step !== "submitting") e.target.style.boxShadow = `0 12px 40px ${COLORS.burgundy}66`; }}
                  onMouseLeave={(e) => { if (step !== "submitting") e.target.style.boxShadow = `0 8px 30px ${COLORS.burgundy}44`; }}
                >
                  {step === "submitting" ? "Sending…" : "Confirm Attendance"}
                </button>
              </div>
            </div>
          )}

          {/* ── STEP: CONFIRMED ── */}
          {step === "confirmed" && (
            <div className="page-content" style={{ animationDelay: "0.1s" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, ${COLORS.darkMid}DD, ${COLORS.dark}EE)`,
                  border: `1px solid ${COLORS.gold}33`,
                  borderRadius: 20,
                  padding: "48px 32px",
                  backdropFilter: "blur(20px)",
                  boxShadow: `0 20px 80px ${COLORS.dark}88, 0 0 60px ${COLORS.burgundy}15, inset 0 1px 0 ${COLORS.gold}20`,
                  textAlign: "center",
                }}
              >
                {/* Glowing seal */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${COLORS.gold}55, ${COLORS.burgundy}44)`,
                    border: `1.5px solid ${COLORS.gold}66`,
                    margin: "0 auto 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 40px ${COLORS.gold}33, 0 0 80px ${COLORS.burgundy}22`,
                    animation: "gentlePulse 3s ease-in-out infinite",
                  }}
                >
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
                    <path d="M2 13L11 22L30 2" stroke={COLORS.ivory} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 300,
                    color: COLORS.ivory,
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  We'll see you there,
                </h2>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 30,
                    fontWeight: 500,
                    color: COLORS.gold,
                    letterSpacing: "0.02em",
                    marginBottom: 24,
                    textShadow: `0 0 30px ${COLORS.gold}44`,
                  }}
                >
                  {guestName}
                </h3>

                <PersianOrnament style={{ margin: "0 auto 24px" }} />

                <div
                  style={{
                    background: `${COLORS.burgundy}1A`,
                    border: `1px solid ${COLORS.gold}22`,
                    borderRadius: 12,
                    padding: "18px 22px",
                    marginBottom: 28,
                  }}
                >
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.2em", color: COLORS.gold, opacity: 0.7, marginBottom: 8 }}>
                    YOUR DINNER SELECTION
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      color: COLORS.ivory,
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {selectedItem?.name}
                  </p>
                  {selectedSide && (
                    <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 14, color: `${COLORS.ivory}88`, fontStyle: "italic", marginTop: 4 }}>
                      with {selectedSide}
                    </p>
                  )}
                  {dietaryNotes && (
                    <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: `${COLORS.ivory}66`, fontStyle: "italic", marginTop: 6 }}>
                      Note: {dietaryNotes}
                    </p>
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: 17,
                    fontStyle: "italic",
                    color: `${COLORS.ivory}88`,
                    lineHeight: 1.8,
                    letterSpacing: "0.02em",
                  }}
                >
                  The forest will be waiting.<br />
                  We cannot wait to celebrate with you.
                </p>

                <p
                  style={{
                    marginTop: 24,
                    fontFamily: "'Cinzel', serif",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: `${COLORS.gold}77`,
                  }}
                >
                  D & A · September 6, 2026
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, fontStyle: "italic", color: `${COLORS.ivory}33`, letterSpacing: "0.05em" }}>
              Questions? Reach out to the couple.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
