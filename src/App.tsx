/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BlogNavbar } from './components/BlogNavbar';
import { BlogSubRibbon } from './components/BlogSubRibbon';
import { HeroEssay } from './components/HeroEssay';
import { BentoEssays } from './components/BentoEssays';
import { AboutDerrickSection } from './components/AboutDerrickSection';
import { NewsletterDispatch } from './components/NewsletterDispatch';
import { BlogFooter } from './components/BlogFooter';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { ARTICLES } from './data/blogData';
import { Article } from './types';

export default function App() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('derrick_ngure_bookmarks');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return ['architecture-of-simplicity', 'silicon-savannah-renaissance'];
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [audioMode, setAudioMode] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('derrick_ngure_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      // ignore
    }
  }, [bookmarks]);

  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const filteredArticles = ARTICLES.filter((a) => {
    if (selectedCategory === 'All') return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white font-sans">
      {/* 44px Frosted Glass Top Navigation Bar */}
      <BlogNavbar
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
        onOpenArticle={(article) => setActiveArticle(article)}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      {/* Sticky Secondary Category Ribbon */}
      <BlogSubRibbon
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        audioMode={audioMode}
        onToggleAudioMode={() => setAudioMode(!audioMode)}
        articleCount={filteredArticles.length}
      />

      {/* Main Content Flow */}
      <main>
        {/* Marquee Hero: Flagship Cover Essay */}
        <HeroEssay
          article={featuredArticle}
          onRead={() => setActiveArticle(featuredArticle)}
          isBookmarked={bookmarks.includes(featuredArticle.id)}
          onToggleBookmark={() => handleToggleBookmark(featuredArticle.id)}
        />

        {/* Curated Bento Grid of Essays */}
        <BentoEssays
          articles={filteredArticles}
          onOpenArticle={(article) => setActiveArticle(article)}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* About Derrick Ngure, Principles & Interactive Systems Lab */}
        <AboutDerrickSection />

        {/* Minimalist Dispatch Subscription */}
        <NewsletterDispatch />
      </main>

      {/* Editorial Colophon & Multi-Column Directory */}
      <BlogFooter />

      {/* Apple Safari Reader Style Immersive Article Modal */}
      <ArticleReaderModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        isBookmarked={activeArticle ? bookmarks.includes(activeArticle.id) : false}
        onToggleBookmark={() => activeArticle && handleToggleBookmark(activeArticle.id)}
        onSelectArticle={(article) => setActiveArticle(article)}
        allArticles={ARTICLES}
      />
    </div>
  );
}
