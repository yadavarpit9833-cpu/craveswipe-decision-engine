import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { foods, FoodItem } from "@/data/foods";
import FoodCard from "@/components/FoodCard";
import MatchNotification from "@/components/MatchNotification";
import ResultsSummary from "@/components/ResultsSummary";
import LoginScreen from "@/components/LoginScreen";
import ProfileBadge from "@/components/ProfileBadge";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<FoodItem[]>([]);
  const [skipped, setSkipped] = useState<FoodItem[]>([]);
  const [matchFood, setMatchFood] = useState<FoodItem | null>(null);
  const [showMatch, setShowMatch] = useState(false);
  const [started, setStarted] = useState(false);

  const isFinished = currentIndex >= foods.length;
  const currentFood = !isFinished ? foods[currentIndex] : null;
  const progress = (currentIndex / foods.length) * 100;

  const handleSwipeRight = useCallback(() => {
    const food = foods[currentIndex];
    console.log(`✅ Match found: ${food.name}`, { tags: food.tags, price: food.price });
    setMatches((prev) => [...prev, food]);
    setMatchFood(food);
    setShowMatch(true);
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex]);

  const handleSwipeLeft = useCallback(() => {
    const food = foods[currentIndex];
    console.log(`❌ Skipped: ${food.name}`, { tags: food.tags });
    setSkipped((prev) => [...prev, food]);
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setMatches([]);
    setSkipped([]);
    setMatchFood(null);
    setShowMatch(false);
  };

  if (!loggedIn) {
    return <LoginScreen onLoginSuccess={() => setLoggedIn(true)} />;
  }

  if (!started) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70 scanline" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-pixel text-3xl md:text-5xl text-primary text-glow-cyan mb-4 leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            CRAVE
            <span className="text-secondary text-glow-magenta">SWIPE</span>
          </motion.h1>
          <p className="font-mono text-muted-foreground text-sm md:text-base mb-2 max-w-md mx-auto">
            Can't decide what to eat? Let your thumbs do the thinking.
          </p>
          <p className="font-mono text-muted-foreground text-xs mb-10">
            Swipe right on what you crave. Swipe left to skip.
          </p>
          <motion.button
            onClick={() => setStarted(true)}
            className="font-pixel text-sm px-8 py-4 rounded-xl bg-primary text-primary-foreground box-glow-cyan hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START SWIPING
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-background relative">
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between relative z-10">
        <h1 className="font-pixel text-sm text-primary text-glow-cyan">
          CRAVE<span className="text-secondary text-glow-magenta">SWIPE</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            {currentIndex}/{foods.length}
          </span>
          <ProfileBadge />
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full max-w-md px-6 mb-6 relative z-10">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            style={{ boxShadow: "0 0 10px hsl(180 100% 50% / 0.6)" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
        {!isFinished && currentFood ? (
          <>
            <div className="relative w-[340px] h-[480px]">
              <AnimatePresence mode="wait">
                <FoodCard
                  key={currentFood.id}
                  food={currentFood}
                  onSwipeLeft={handleSwipeLeft}
                  onSwipeRight={handleSwipeRight}
                />
              </AnimatePresence>
            </div>

            {/* Action buttons */}
            <div className="flex gap-8 mt-8">
              <motion.button
                onClick={handleSwipeLeft}
                className="w-16 h-16 rounded-full border-2 border-destructive flex items-center justify-center text-destructive text-2xl font-bold hover:bg-destructive/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ boxShadow: "0 0 15px hsl(0 80% 55% / 0.3)" }}
              >
                ✕
              </motion.button>
              <motion.button
                onClick={handleSwipeRight}
                className="w-16 h-16 rounded-full border-2 border-neon-green flex items-center justify-center text-neon-green text-2xl font-bold hover:bg-neon-green/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ boxShadow: "0 0 15px hsl(140 80% 50% / 0.3)" }}
              >
                ♥
              </motion.button>
            </div>
          </>
        ) : (
          <ResultsSummary
            matches={matches}
            skipped={skipped}
            onRestart={handleRestart}
          />
        )}
      </div>

      <MatchNotification
        food={matchFood}
        visible={showMatch}
        onClose={() => setShowMatch(false)}
      />
    </div>
  );
};

export default Index;
