"use client";

import { useMemo, useState } from "react";
import categories from "../categories-data";

const heroImages = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/UB_City%2C_Bangalore.JPG",
    alt: "UB City, Bangalore",
    className: "one"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vidhana_Soudha_Bangalore.jpg",
    alt: "Vidhana Soudha, Bangalore",
    className: "two"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bangalore_Palace_-_Jayamahal.jpg",
    alt: "Bangalore Palace",
    className: "three"
  }
];

const bottomImages = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Glasshouse_and_fountain_at_lalbagh.jpg",
    alt: "Lalbagh glasshouse, Bangalore"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lalbagh_Entrance%2C_Bangalore.jpg",
    alt: "Lalbagh entrance, Bangalore"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vidhan_Soudha_-_Bangalore.jpg",
    alt: "Vidhan Soudha, Bangalore"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bangalore_Palace_-_Jayamahal.jpg",
    alt: "Bangalore Palace"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/UB_City%2C_Bangalore.JPG",
    alt: "UB City, Bangalore"
  }
];

function looksLikeImageUrl(value) {
  const s = String(value || "").trim();
  if (!s) return false;
  return (
    /^https?:\/\//i.test(s) ||
    /^data:image\//i.test(s) ||
    /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(s)
  );
}

export default function HomePage() {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const totalApps = useMemo(
    () =>
      categories.reduce(
        (sum, cat) => sum + (Array.isArray(cat.apps) ? cat.apps.length : 0),
        0
      ),
    []
  );

  const visibleCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return categories.filter((cat) => {
      const categoryMatches =
        activeCategoryId === "all" || cat.id === activeCategoryId;
      if (!categoryMatches) return false;
      if (!q) return true;

      const categoryText = [cat.name, cat.tabLabel, cat.id]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const appMatches = (cat.apps || []).some((app) =>
        [app.name, app.desc, app.url].filter(Boolean).join(" ").toLowerCase().includes(q)
      );

      return categoryText.includes(q) || appMatches;
    });
  }, [activeCategoryId, searchQuery]);

  return (
    <>
      <nav>
        <div className="logo">
          Banglore<span className="logo-dot">Hub</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-orb" />
        <div className="hero-gallery" aria-hidden="true">
          {heroImages.map((img) => (
            <div key={img.alt} className={`hero-shot ${img.className}`}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        <div className="hero-badge">
          <span className="badge-dot" /> India&apos;s #1 App Directory
        </div>
        <h1>
          Every app your <em>city</em> runs on
        </h1>
        <p>
          From groceries in 10 minutes to cab rides at midnight — BangloreHub is your ultimate
          directory of apps that power Indian urban life.
        </p>

        <div className="hero-search">
          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              id="search-input"
              type="text"
              placeholder="Search apps or categories…"
              list="category-suggestions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <datalist id="category-suggestions">
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name || cat.tabLabel || ""} />
              ))}
            </datalist>
          </div>
          <button id="search-button" className="nav-pill" type="button">
            Search
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">{totalApps}</div>
            <div className="stat-label">Apps Listed</div>
          </div>
          <div>
            <div className="stat-num">{categories.length}</div>
            <div className="stat-label">Categories</div>
          </div>
        </div>
      </section>

      <div className="tabs">
        <button
          type="button"
          className={`tab ${activeCategoryId === "all" ? "active" : ""}`}
          onClick={() => setActiveCategoryId("all")}
        >
          🧩 All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`tab ${activeCategoryId === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategoryId(cat.id)}
          >
            {`${cat.icon || ""} ${cat.tabLabel || cat.name || ""}`.trim()}
          </button>
        ))}
      </div>

      <div className="section">
        {visibleCategories.map((cat, idx) => (
          <div className="category-block" key={cat.id} data-visible="true" data-generated="true">
            <div className="cat-label">
              <div className="cat-icon" style={{ background: cat.iconBg || "transparent" }}>
                {cat.icon || ""}
              </div>
              <span className="cat-name">{cat.name || ""}</span>
              <span className="cat-count">{(cat.apps || []).length} apps</span>
            </div>
            <div className="app-grid">
              {(cat.apps || []).map((app, appIdx) => {
                const logoValue = app.logoEmoji ?? "";
                return (
                  <a
                    className="app-card"
                    key={`${app.name}-${appIdx}`}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={app.cardGlow ? { "--card-glow": app.cardGlow } : undefined}
                  >
                    <div
                      className="app-logo"
                      style={{
                        background: app.logoBg,
                        fontSize: app.logoFontSize || undefined
                      }}
                    >
                      {looksLikeImageUrl(logoValue) ? (
                        <img src={logoValue} alt={app.name} />
                      ) : (
                        logoValue
                      )}
                    </div>
                    <div className="app-info">
                      <div className="app-name">{app.name}</div>
                      <div className="app-desc">{app.desc}</div>
                    </div>
                  </a>
                );
              })}
            </div>
            {idx < visibleCategories.length - 1 ? <div className="divider" /> : null}
          </div>
        ))}
      </div>

      <div className="more-note">More categories and apps will be added soon.</div>

      <div className="bottom-gallery" aria-hidden="true">
        {bottomImages.map((img) => (
          <div key={img.alt} className="bottom-shot">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <footer>
        Made with ♥ for urban India &nbsp;·&nbsp; © 2025 <span>BangloreHub</span>
        &nbsp;·&nbsp; All apps are trademarks of their respective owners
      </footer>
    </>
  );
}
