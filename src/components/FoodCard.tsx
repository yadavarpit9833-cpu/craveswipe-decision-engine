import { FoodItem } from "@/data/foods";
import { motion } from "framer-motion";

interface FoodCardProps {
  food: FoodItem;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const FoodCard = ({ food, onSwipeLeft, onSwipeRight }: FoodCardProps) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={(_e, info) => {
        if (info.offset.x > 120) {
          onSwipeRight();
        } else if (info.offset.x < -120) {
          onSwipeLeft();
        }
      }}
      initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -100 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileDrag={{ cursor: "grabbing" }}
      style={{ touchAction: "none" }}
    >
      <div className="neon-border w-[320px] rounded-2xl bg-card p-6 relative overflow-hidden cursor-grab">
        {/* Scanline overlay */}
        <div className="absolute inset-0 scanline pointer-events-none z-10" />

        {/* Emoji */}
        <div className="text-center mb-4">
          <span className="text-8xl drop-shadow-lg">{food.emoji}</span>
        </div>

        {/* Name */}
        <h2 className="font-pixel text-lg text-center text-primary text-glow-cyan mb-2 leading-relaxed">
          {food.name}
        </h2>

        {/* Price & Rating */}
        <div className="flex justify-center items-center gap-4 mb-3">
          <span className="text-neon-yellow font-mono font-bold text-glow-yellow">
            {food.price}
          </span>
          <span className="text-neon-magenta font-mono text-glow-magenta">
            ★ {food.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm text-center mb-4 font-mono leading-relaxed">
          {food.description}
        </p>

        {/* Address */}
        <p className="text-xs font-mono text-muted-foreground text-center mb-2 opacity-70">
          📍 {food.address}
        </p>

        {/* View on Map */}
        <div className="flex justify-center mb-3">
          <a
            href={food.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md border border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            🗺️ View on Map
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {food.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono rounded-md bg-muted text-primary border border-primary/30"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Swipe hints */}
        <div className="flex justify-between mt-6 text-xs font-pixel text-muted-foreground">
          <span className="text-destructive">← NAH</span>
          <span className="text-neon-green">YEAH! →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
