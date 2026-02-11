import { FoodItem } from "@/data/foods";
import { motion } from "framer-motion";

interface ResultsSummaryProps {
  matches: FoodItem[];
  skipped: FoodItem[];
  onRestart: () => void;
}

const ResultsSummary = ({ matches, skipped, onRestart }: ResultsSummaryProps) => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-pixel text-xl text-center text-primary text-glow-cyan mb-8 leading-relaxed">
        RESULTS
      </h2>

      {matches.length > 0 && (
        <div className="mb-8">
          <h3 className="font-pixel text-xs text-neon-green text-glow-yellow mb-4">
            YOUR CRAVINGS ({matches.length})
          </h3>
          <div className="space-y-3">
            {matches.map((food, i) => (
              <motion.div
                key={food.id}
                className="neon-border rounded-lg bg-card p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl">{food.emoji}</span>
                <div className="flex-1">
                  <p className="font-mono font-bold text-foreground">{food.name}</p>
                  <div className="flex gap-1 mt-1">
                    {food.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-mono text-primary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-neon-yellow">{food.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {matches.length === 0 && (
        <p className="text-center text-muted-foreground font-mono mb-8">
          No matches this time. Picky eater? 😏
        </p>
      )}

      {skipped.length > 0 && (
        <div className="mb-8">
          <h3 className="font-pixel text-xs text-destructive mb-4">
            SKIPPED ({skipped.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {skipped.map((food) => (
              <span
                key={food.id}
                className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-mono"
              >
                {food.emoji} {food.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onRestart}
        className="w-full py-4 rounded-xl font-pixel text-sm text-primary-foreground bg-primary box-glow-cyan hover:opacity-90 transition-opacity"
      >
        PLAY AGAIN
      </button>
    </motion.div>
  );
};

export default ResultsSummary;
