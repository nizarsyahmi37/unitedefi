"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface SpaceGridProps {
  className?: string
  children?: React.ReactNode
  intensity?: 'low' | 'medium' | 'high'
}

export function SpaceGrid({ className, children, intensity = 'medium' }: SpaceGridProps) {
  const intensityClasses = {
    low: 'opacity-20',
    medium: 'opacity-40',
    high: 'opacity-60'
  }

  return (
    <div className={cn('relative', className)}>
      <div 
        className={cn(
          'absolute inset-0 pointer-events-none',
          intensityClasses[intensity]
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 204, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 204, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      {children}
    </div>
  )
}

interface HolographicPanelProps {
  className?: string
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
}

export function HolographicPanel({ className, children, variant = 'primary' }: HolographicPanelProps) {
  const variantClasses = {
    primary: 'border-[#00FFCC] shadow-[0_0_30px_rgba(0,255,204,0.3)]',
    secondary: 'border-[#FF6B35] shadow-[0_0_30px_rgba(255,107,53,0.3)]',
    accent: 'border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.3)]'
  }

  return (
    <div className={cn(
      'relative border-2 bg-[#1A3B5C]/20 backdrop-blur-sm holographic',
      variantClasses[variant],
      className
    )}>
      {children}
    </div>
  )
}

interface NeonTextProps {
  children: React.ReactNode
  className?: string
  color?: 'cyan' | 'orange' | 'purple' | 'green'
  glitch?: boolean
}

export function NeonText({ children, className, color = 'cyan', glitch = false }: NeonTextProps) {
  const colorClasses = {
    cyan: 'text-[#00FFCC]',
    orange: 'text-[#FF6B35]',
    purple: 'text-[#8B5CF6]',
    green: 'text-[#10B981]'
  }

  const glowColors = {
    cyan: 'drop-shadow-[0_0_10px_#00FFCC]',
    orange: 'drop-shadow-[0_0_10px_#FF6B35]',
    purple: 'drop-shadow-[0_0_10px_#8B5CF6]',
    green: 'drop-shadow-[0_0_10px_#10B981]'
  }

  return (
    <span 
      className={cn(
        'font-mono font-bold uppercase tracking-wider',
        colorClasses[color],
        glowColors[color],
        glitch && 'glitch',
        className
      )}
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </span>
  )
}

interface ParticleFieldProps {
  className?: string
  density?: 'low' | 'medium' | 'high'
}

export function ParticleField({ className, density = 'medium' }: ParticleFieldProps) {
  const densityConfig = {
    low: { count: 20, size: '1px' },
    medium: { count: 40, size: '1.5px' },
    high: { count: 60, size: '2px' }
  }

  const config = densityConfig[density]

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: config.count }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: config.size,
            height: config.size,
            backgroundColor: [
              '#00FFCC',
              '#FF6B35',
              '#8B5CF6',
              '#10B981',
              '#F59E0B'
            ][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  )
}

interface ScanLineProps {
  className?: string
  direction?: 'horizontal' | 'vertical'
  speed?: 'slow' | 'medium' | 'fast'
}

export function ScanLine({ className, direction = 'horizontal', speed = 'medium' }: ScanLineProps) {
  const speedClasses = {
    slow: 'animate-[scan_4s_ease-in-out_infinite]',
    medium: 'animate-[scan_2s_ease-in-out_infinite]',
    fast: 'animate-[scan_1s_ease-in-out_infinite]'
  }

  const directionClasses = {
    horizontal: 'h-[2px] w-full',
    vertical: 'w-[2px] h-full'
  }

  return (
    <div className={cn('absolute pointer-events-none', className)}>
      <div 
        className={cn(
          'bg-gradient-to-r from-transparent via-neon-cyan to-transparent',
          directionClasses[direction],
          speedClasses[speed]
        )}
        style={{
          boxShadow: '0 0 10px #00FFCC'
        }}
      />
    </div>
  )
}

// Add scan animation to globals.css
const scanKeyframes = `
  @keyframes scan {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
`

// Circuit pattern component
interface CircuitPatternProps {
  className?: string
  opacity?: number
}

export function CircuitPattern({ className, opacity = 0.1 }: CircuitPatternProps) {
  return (
    <div 
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: `
          linear-gradient(90deg, transparent 24%, rgba(0, 255, 204, ${opacity}) 25%, rgba(0, 255, 204, ${opacity}) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, ${opacity}) 75%, rgba(0, 255, 204, ${opacity}) 76%, transparent 77%, transparent),
          linear-gradient(rgba(0, 255, 204, ${opacity}) 24%, transparent 25%, transparent 26%, rgba(0, 255, 204, ${opacity}) 27%, rgba(0, 255, 204, ${opacity}) 74%, transparent 75%, transparent 76%, rgba(0, 255, 204, ${opacity}) 77%, rgba(0, 255, 204, ${opacity}))
        `,
        backgroundSize: '50px 50px'
      }}
    />
  )
}

interface GlowingOrbProps {
  className?: string
  color?: 'cyan' | 'orange' | 'purple' | 'green'
  size?: 'sm' | 'md' | 'lg'
  pulse?: boolean
}

export function GlowingOrb({ className, color = 'cyan', size = 'md', pulse = true }: GlowingOrbProps) {
  const colorClasses = {
    cyan: 'bg-[#00FFCC] shadow-[0_0_20px_#00FFCC]',
    orange: 'bg-[#FF6B35] shadow-[0_0_20px_#FF6B35]',
    purple: 'bg-[#8B5CF6] shadow-[0_0_20px_#8B5CF6]',
    green: 'bg-[#10B981] shadow-[0_0_20px_#10B981]'
  }

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }

  return (
    <div 
      className={cn(
        'rounded-full',
        colorClasses[color],
        sizeClasses[size],
        pulse && 'animate-pulse',
        className
      )}
    />
  )
}
