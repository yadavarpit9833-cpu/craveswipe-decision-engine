import { motion } from "framer-motion";
import { User } from "lucide-react";

const ProfileBadge = () => {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/80 border border-primary/30 backdrop-blur-sm"
      style={{ boxShadow: "0 0 10px hsl(180 100% 50% / 0.15)" }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
        <User size={12} className="text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-[10px] text-muted-foreground leading-none">WELCOME</span>
        <span className="font-pixel text-[8px] text-primary text-glow-cyan leading-tight mt-0.5">STUDENT</span>
      </div>
    </motion.div>
  );
};

export default ProfileBadge;
