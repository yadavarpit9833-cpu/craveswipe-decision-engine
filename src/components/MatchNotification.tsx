import { motion, AnimatePresence } from "framer-motion";
import { FoodItem } from "@/data/foods";

interface MatchNotificationProps {
  food: FoodItem | null;
  visible: boolean;
  onClose: () => void;
}

const MatchNotification = ({ food, visible, onClose }: MatchNotificationProps) => {
  if (!food) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="neon-border rounded-2xl bg-card p-8 text-center max-w-sm mx-4"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {food.emoji}
            </motion.div>
            <h3 className="font-pixel text-sm text-neon-yellow text-glow-yellow mb-2">
              MATCH FOUND!
            </h3>
            <p className="font-pixel text-lg text-primary text-glow-cyan mb-4 leading-relaxed">
              {food.name}
            </p>
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {food.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono rounded bg-muted text-neon-green"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="font-pixel text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              [ CONTINUE ]
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatchNotification;
