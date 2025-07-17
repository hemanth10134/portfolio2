import React, { useEffect, useState, memo } from 'react';

const Sparkles: React.FC = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const generateSparkle = () => ({
            id: Math.random(),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${Math.random() * 1.5 + 0.8}s`,
            delay: `${Math.random() * 1.2}s`,
            size: `${Math.random() * 2 + 1}px`
        });

        // Only generate on client
        if (typeof window !== 'undefined') {
          setSparkles(Array.from({ length: 50 }, generateSparkle));
        }
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            {sparkles.map(s => (
                <div
                    key={s.id}
                    className="absolute rounded-full bg-blue-300 animate-sparkle"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        animationDuration: s.duration,
                        animationDelay: s.delay,
                    }}
                />
            ))}
            <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
            <style>{`
                @keyframes sparkle {
                    0% { transform: scale(0); opacity: 0; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(0); opacity: 0; }
                }
                .animate-sparkle {
                    animation-name: sparkle;
                    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
                    animation-iteration-count: infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(0.95) rotate(0deg); }
                    50% { opacity: 0.8; transform: scale(1.05) rotate(10deg); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-2000 {
                    animation-delay: -5s;
                }
            `}</style>
        </div>
    );
};

export default memo(Sparkles);