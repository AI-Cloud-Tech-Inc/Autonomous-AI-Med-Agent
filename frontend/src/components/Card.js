import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Base Card component with customizable hover effects
 */
export default function Card({ 
  title, 
  children, 
  className = "",
  hoverEffect = "lift",
  revealContent = null,
  icon = null,
  gradient = false,
  accessibleLabel
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return "hover:-translate-y-2 hover:shadow-xl";
      case "scale":
        return "hover:scale-105 hover:shadow-xl";
      case "glow":
        return "hover:shadow-2xl hover:shadow-blue-500/25";
      case "border":
        return "hover:border-blue-400";
      case "none":
        return "";
      default:
        return "hover:-translate-y-2 hover:shadow-xl";
    }
  };

  const getGradientOverlay = () => {
    if (!gradient) return null;
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
        style={{ pointerEvents: 'none' }}
      />
    );
  };

  return (
    <div
      className={`
        bg-surface border border-border rounded-xl shadow-sm p-6 
        transition-all duration-300 ease-out transform
        ${getHoverStyles()}
        ${className}
      `}
      role="region"
      aria-label={accessibleLabel}
      aria-expanded={!!revealContent && isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getGradientOverlay()}
      
      {icon && (
        <div className={`mb-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
      )}
      
      {title && (
        <h2 className={`text-lg font-semibold mb-2 text-text transition-colors duration-300 ${isHovered ? 'text-blue-400' : ''}`}>
          {title}
        </h2>
      )}
      
      <div className="relative z-10">
        {children}
      </div>

      {revealContent && (
        <div 
          className={`overflow-hidden transition-all duration-300 ease-out ${isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="pt-4 border-t border-border">
            {revealContent}
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  className: PropTypes.string,
  hoverEffect: PropTypes.oneOf(["lift","scale","glow","border","none"]),
  revealContent: PropTypes.node,
  icon: PropTypes.node,
  gradient: PropTypes.bool,
  accessibleLabel: PropTypes.string
};

Card.defaultProps = {
  className: "",
  hoverEffect: "lift",
  gradient: false
};

/**
 * Card with image overlay reveal effect
 */
export function ImageHoverCard({ 
  image, 
  title, 
  description, 
  overlayContent,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`
        relative overflow-hidden rounded-xl bg-surface border border-border w-full text-left
        transition-all duration-300 ease-out
        hover:shadow-xl hover:shadow-blue-500/20
        focus:outline-none focus:ring-2 focus:ring-blue-400/60
        ${className}
      `}
      aria-expanded={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={() => setIsHovered((p) => !p)}
    >
      {/* Image with scale effect */}
      <div 
        className={`h-48 w-full block bg-cover bg-center transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
        style={{ backgroundImage: `url(${image})`, willChange: 'transform' }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
      
      {/* Content */}
      <div className="relative p-6">
        <h3 className={`text-xl font-bold text-text mb-2 transition-all duration-300 ${isHovered ? 'translate-y-0' : ''}`}>
          {title}
        </h3>
        <p className={`text-gray-400 text-sm transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
          {description}
        </p>
        
        {/* Revealed content on hover */}
        <div 
          className={`transition-all duration-300 ease-out ${isHovered ? 'translate-y-0 opacity-100 mt-4' : 'translate-y-4 opacity-0'}`}
        >
          {overlayContent}
        </div>
      </div>
    </button>
  );
}

ImageHoverCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  overlayContent: PropTypes.node,
  className: PropTypes.string
};

ImageHoverCard.defaultProps = {
  className: ""
};

/**
 * Card with sliding reveal panel
 */
export function SlideRevealCard({ 
  frontContent, 
  revealContent, 
  direction = "up",
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getSlideDirection = () => {
    switch (direction) {
      case "up": return "hover:-translate-y-12";
      case "down": return "hover:translate-y-12";
      case "left": return "hover:-translate-x-12";
      case "right": return "hover:translate-x-12";
      default: return "hover:-translate-y-12";
    }
  };

  const hiddenTransform = {
    up: 'translate-y-full',
    down: '-translate-y-full',
    left: 'translate-x-full',
    right: '-translate-x-full',
  }[direction] || 'translate-y-full';

  return (
    <button
      type="button"
      className={`relative overflow-hidden rounded-xl bg-surface border border-border w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-400/60 ${className}`}
      aria-expanded={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={() => setIsHovered((p) => !p)}
    >
      {/* Front content */}
      <div className={`transition-transform duration-300 ease-out ${getSlideDirection()}`}>
        {frontContent}
      </div>
      
      {/* Reveal panel */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 p-6
          transition-transform duration-300 ease-out
          ${isHovered ? 'translate-x-0 translate-y-0 opacity-100' : `${hiddenTransform} opacity-0`}
        `}
      >
        <div className="text-white">
          {revealContent}
        </div>
      </div>
    </button>
  );
}

SlideRevealCard.propTypes = {
  frontContent: PropTypes.node,
  revealContent: PropTypes.node,
  direction: PropTypes.oneOf(["up","down","left","right"]),
  className: PropTypes.string
};

SlideRevealCard.defaultProps = {
  direction: "up",
  className: ""
};

/**
 * Stats card with animated counter on hover
 */
export function StatsCard({ 
  value, 
  label, 
  icon: Icon, 
  trend = null,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  React.useEffect(() => {
    if (!isHovered) return;
    const duration = 500;
    const steps = 20;
    let frame = 0;
    const start = displayValue; // capture once at effect start
    const increment = (value - start) / steps;
    const timer = setInterval(() => {
      frame += 1;
      const next = start + increment * frame;
      if (frame >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(next));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isHovered, value]);

  return (
    <div
      className={`
        bg-surface border border-border rounded-xl p-6
        transition-all duration-300 ease-out
        hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400/50
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className={`text-3xl font-bold mt-1 transition-colors duration-300 ${isHovered ? 'text-blue-400' : 'text-text'}`}>
            {displayValue}
          </p>
          {trend && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg transition-all duration-300 ${isHovered ? 'bg-blue-500/20 scale-110' : 'bg-gray-700/50'}`}>
            <Icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
        )}
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  value: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.elementType,
  trend: PropTypes.number,
  className: PropTypes.string
};

StatsCard.defaultProps = {
  className: "",
  trend: null
};

/**
 * Card with flip animation
 */
export function FlipCard({ 
  frontContent, 
  backContent, 
  className = "" 
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button 
      type="button"
      className={`relative preserve-3d perspective-1000 w-full focus:outline-none focus:ring-2 focus:ring-blue-400/60 ${className}`}
      aria-pressed={isFlipped}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((p) => !p)}
    >
      <div 
        className={`
          relative w-full h-64 transition-transform duration-500
          transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-surface border border-border rounded-xl p-6">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6">
          <div className="text-white h-full flex items-center justify-center">
            {backContent}
          </div>
        </div>
      </div>
    </button>
  );
}

FlipCard.propTypes = {
  frontContent: PropTypes.node,
  backContent: PropTypes.node,
  className: PropTypes.string
};

FlipCard.defaultProps = {
  className: ""
};

/**
 * Glass morphism hover card
 */
export function GlassHoverCard({ 
  title, 
  description, 
  image,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        backdrop-blur-lg bg-white/5 border border-white/10
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:shadow-blue-500/30
        hover:border-white/20
        ${className}
      `}
      role="group"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Content */}
      <div className="relative p-8 z-10">
        {image && (
          <div className={`mb-4 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            <img src={image} alt={title} className="w-16 h-16 rounded-xl object-cover" />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className={`text-gray-300 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          {description}
        </p>
        
        {/* Reveal button on hover */}
        <div className={`mt-6 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}

GlassHoverCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  image: PropTypes.string,
  className: PropTypes.string
};

GlassHoverCard.defaultProps = {
  className: ""
};
