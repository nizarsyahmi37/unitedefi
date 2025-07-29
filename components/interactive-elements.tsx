"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NeonText } from '@/components/space-elements'

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean
  loadingText?: string
}

export function LoadingButton({ 
  children, 
  loading = false, 
  loadingText = "PROCESSING", 
  disabled,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button 
      {...props} 
      disabled={disabled || loading}
      className={cn(props.className, loading && "cursor-not-allowed")}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>{loadingText}</span>
        </div>
      ) : children}
    </Button>
  )
}

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  animated?: boolean
  color?: 'cyan' | 'orange' | 'purple' | 'green'
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className, 
  animated = false,
  color = 'cyan'
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)
  
  const colorClasses = {
    cyan: 'border-neon-cyan',
    orange: 'border-neon-orange',
    purple: 'border-neon-purple',
    green: 'border-neon-green'
  }
  
  const gradients = {
    cyan: 'from-neon-cyan to-neon-cyan/70',
    orange: 'from-neon-orange to-neon-orange/70',
    purple: 'from-neon-purple to-neon-purple/70',
    green: 'from-neon-green to-neon-green/70'
  }

  return (
    <div className={cn('progress-bar', colorClasses[color], animated && 'animated', className)}>
      <div 
        className={cn('h-full bg-gradient-to-r transition-all duration-500', gradients[color])}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

interface FormFieldProps {
  label: string
  children: React.ReactNode
  error?: string
  className?: string
}

export function FormField({ label, children, error, className }: FormFieldProps) {
  return (
    <div className={cn('form-group', className)}>
      <label>{label}</label>
      {children}
      {error && (
        <p className="text-destructive text-sm font-mono mt-2 flex items-center gap-2">
          <span className="w-1 h-1 bg-destructive rounded-full animate-pulse" />
          {error}
        </p>
      )}
    </div>
  )
}

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  interactive?: boolean
}

export function GlowCard({ 
  children, 
  className, 
  variant = 'primary',
  interactive = false 
}: GlowCardProps) {
  const variantClasses = {
    primary: 'border-neon-cyan shadow-[0_0_20px_rgba(0,255,204,0.2)]',
    secondary: 'border-neon-orange shadow-[0_0_20px_rgba(255,107,53,0.2)]',
    accent: 'border-neon-purple shadow-[0_0_20px_rgba(139,92,246,0.2)]'
  }

  return (
    <div className={cn(
      'border-2 bg-space-medium/20 backdrop-blur-sm p-6 transition-all duration-300',
      variantClasses[variant],
      interactive && 'interactive-glow cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]',
      className
    )}>
      {children}
    </div>
  )
}

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'warning' | 'error'
  label?: string
  className?: string
}

export function StatusIndicator({ status, label, className }: StatusIndicatorProps) {
  const statusConfig = {
    online: {
      color: 'bg-neon-green',
      shadow: 'shadow-[0_0_10px_#10B981]',
      text: 'ONLINE'
    },
    offline: {
      color: 'bg-gray-500',
      shadow: 'shadow-[0_0_10px_#6B7280]',
      text: 'OFFLINE'
    },
    warning: {
      color: 'bg-neon-orange',
      shadow: 'shadow-[0_0_10px_#FF6B35]',
      text: 'WARNING'
    },
    error: {
      color: 'bg-destructive',
      shadow: 'shadow-[0_0_10px_#FF4444]',
      text: 'ERROR'
    }
  }

  const config = statusConfig[status]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'w-3 h-3 rounded-full animate-pulse',
        config.color,
        config.shadow
      )} />
      <span className="text-sm font-mono text-muted-foreground">
        {label || config.text}
      </span>
    </div>
  )
}

interface MetricDisplayProps {
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function MetricDisplay({ 
  label, 
  value, 
  unit, 
  trend = 'neutral',
  className 
}: MetricDisplayProps) {
  const trendColors = {
    up: 'text-neon-green',
    down: 'text-destructive',
    neutral: 'text-neon-cyan'
  }

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  }

  return (
    <div className={cn('space-y-2', className)}>
      <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <span className={cn('text-3xl font-black', trendColors[trend])}>
          {value}
        </span>
        {unit && (
          <span className="text-sm font-mono text-muted-foreground">
            {unit}
          </span>
        )}
        <span className={cn('text-lg', trendColors[trend])}>
          {trendIcons[trend]}
        </span>
      </div>
    </div>
  )
}

interface CommandInputProps {
  onCommand?: (command: string) => void
  placeholder?: string
  className?: string
}

export function CommandInput({ 
  onCommand, 
  placeholder = "ENTER COMMAND...",
  className 
}: CommandInputProps) {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (command.trim()) {
      setHistory(prev => [...prev, command])
      onCommand?.(command)
      setCommand('')
    }
  }

  return (
    <div className={cn('space-y-2', className)}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan font-mono text-sm">
            &gt;
          </span>
          <Input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder={placeholder}
            className="pl-8 font-mono"
          />
        </div>
        <Button type="submit" variant="neon" size="sm">
          EXEC
        </Button>
      </form>
      {history.length > 0 && (
        <div className="max-h-32 overflow-y-auto space-y-1">
          {history.slice(-5).map((cmd, index) => (
            <div key={index} className="text-sm font-mono text-muted-foreground">
              <span className="text-neon-cyan">&gt;</span> {cmd}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
