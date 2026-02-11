import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      onLoginSuccess();
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 scanline" />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Loader2 className="w-12 h-12 text-primary animate-spin" style={{ filter: "drop-shadow(0 0 12px hsl(180 100% 50% / 0.8))" }} />
            <p className="font-pixel text-xs text-primary text-glow-cyan animate-pulse">
              ENTERING THE GRID...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="login"
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {/* Grid lines decorative element */}
            <div className="absolute -inset-20 opacity-10 pointer-events-none" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-6xl mb-6"
            >
              ⚡
            </motion.div>

            <motion.h1
              className="font-pixel text-2xl md:text-4xl text-primary text-glow-cyan mb-2 leading-relaxed"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              ENTER THE
            </motion.h1>
            <motion.h1
              className="font-pixel text-3xl md:text-5xl text-secondary text-glow-magenta mb-6 leading-relaxed"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            >
              GRID
            </motion.h1>

            <p className="font-mono text-muted-foreground text-xs md:text-sm mb-2 max-w-sm mx-auto">
              Identity verification required.
            </p>
            <p className="font-mono text-muted-foreground text-xs mb-10 opacity-60">
              Authenticate to access the CraveSwipe network.
            </p>

            <motion.button
              onClick={handleGoogleLogin}
              className="flex items-center gap-3 mx-auto px-6 py-3.5 rounded-xl bg-card border-2 border-primary/50 font-mono text-sm text-foreground hover:border-primary transition-all"
              style={{ boxShadow: "0 0 20px hsl(180 100% 50% / 0.2), inset 0 0 15px hsl(180 100% 50% / 0.05)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(180 100% 50% / 0.4), inset 0 0 20px hsl(180 100% 50% / 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Google G Logo */}
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Login with Google</span>
            </motion.button>

            <p className="font-mono text-muted-foreground text-[10px] mt-8 opacity-40">
              JIMS ENGINEERING &bull; GREATER NOIDA &bull; v1.0
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginScreen;
