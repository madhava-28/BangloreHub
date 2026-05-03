"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import categories from "../categories-data";

const toSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, "-");

export default function HomePage() {
  const searchParams = useSearchParams();

  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔥 Sync URL → UI
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (!categoryFromUrl) {
      setActiveCategoryId("all");
      return;
    }

    const matched = categories.find(
      (cat) => toSlug(cat.name) === categoryFromUrl
    );

    if (matched) {
      setActiveCategoryId(matched.id);
    }
  }, [searchParams]);

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
        [app.name, app.desc, app.url]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)
      );

      return categoryText.includes(q) || appMatches;
    });
  }, [activeCategoryId, searchQuery]);

  return (
    <>
      {/* HERO + UI unchanged */}

      <div className="tabs">
        {/* 🔥 ALL BUTTON */}
        <button
          type="button"
          className={`tab ${activeCategoryId === "all" ? "active" : ""}`}
          onClick={() => {
            window.history.pushState({}, "", "/");
            setActiveCategoryId("all");
          }}
        >
          🧩 All
        </button>

        {/* 🔥 ALL CATEGORY BUTTONS */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`tab ${activeCategoryId === cat.id ? "active" : ""}`}
            onClick={() => {
              const slug = toSlug(cat.name);
              window.history.pushState({}, "", `/?category=${slug}`);
              setActiveCategoryId(cat.id);
            }}
          >
            {`${cat.icon || ""} ${cat.tabLabel || cat.name || ""}`.trim()}
          </button>
        ))}
      </div>

      {/* YOUR EXISTING UI */}
      <div className="section">
        {visibleCategories.map((cat, idx) => (
          <div className="category-block" key={cat.id}>
            <div className="cat-label">
              <div className="cat-icon">{cat.icon}</div>
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">{(cat.apps || []).length} apps</span>
            </div>

            <div className="app-grid">
              {(cat.apps || []).map((app, appIdx) => (
                <a
                  className="app-card"
                  key={`${app.name}-${appIdx}`}
                  href={app.url}
                  target="_blank"
                >
                  <div className="app-logo">
                    {app.logoEmoji || ""}
                  </div>

                  <div className="app-info">
                    <div className="app-name">{app.name}</div>
                    <div className="app-desc">{app.desc}</div>
                  </div>
                </a>
              ))}
            </div>

            {idx < visibleCategories.length - 1 ? (
              <div className="divider" />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}