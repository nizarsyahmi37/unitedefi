"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, ArrowRightLeft, Shield, Zap, Activity } from 'lucide-react'

interface PriceDisplayProps {
  symbol: string
  price: string
  change: string
  changePercent: string
  className?: string
}

export function PriceDisplay({ symbol, price, change, changePercent, className }: PriceDisplayProps) {
  const isPositive = change.startsWith('+')
  const isNegative = change.startsWith('-')
  
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-[#F8FAFC]">{symbol}</h3>
            <p className="text-2xl font-bold text-[#F8FAFC]">{price}</p>
          </div>
          <div className="text-right">
            <div className={cn(
              'flex items-center gap-1 text-sm font-medium',
              isPositive && 'text-[#10B981]',
              isNegative && 'text-[#EF4444]',
              !isPositive && !isNegative && 'text-[#94A3B8]'
            )}>
              {isPositive && <TrendingUp className="w-4 h-4" />}
              {isNegative && <TrendingDown className="w-4 h-4" />}
              {change}
            </div>
            <div className={cn(
              'text-sm',
              isPositive && 'text-[#10B981]',
              isNegative && 'text-[#EF4444]',
              !isPositive && !isNegative && 'text-[#94A3B8]'
            )}>
              {changePercent}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface TradingPairProps {
  fromToken: {
    symbol: string
    name: string
    logo?: string
    balance?: string
  }
  toToken: {
    symbol: string
    name: string
    logo?: string
    balance?: string
  }
  rate?: string
  className?: string
}

export function TradingPair({ fromToken, toToken, rate, className }: TradingPairProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <ArrowRightLeft className="w-5 h-5" />
          {fromToken.symbol} → {toToken.symbol}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">{fromToken.symbol.slice(0, 2)}</span>
            </div>
            <div>
              <div className="font-medium text-[#F8FAFC]">{fromToken.symbol}</div>
              <div className="text-sm text-[#94A3B8]">{fromToken.name}</div>
            </div>
          </div>
          {fromToken.balance && (
            <div className="text-right">
              <div className="text-sm text-[#94A3B8]">Balance</div>
              <div className="font-medium text-[#F8FAFC]">{fromToken.balance}</div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-[#334155] rounded-full flex items-center justify-center">
            <ArrowRightLeft className="w-4 h-4 text-[#94A3B8]" />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">{toToken.symbol.slice(0, 2)}</span>
            </div>
            <div>
              <div className="font-medium text-[#F8FAFC]">{toToken.symbol}</div>
              <div className="text-sm text-[#94A3B8]">{toToken.name}</div>
            </div>
          </div>
          {toToken.balance && (
            <div className="text-right">
              <div className="text-sm text-[#94A3B8]">Balance</div>
              <div className="font-medium text-[#F8FAFC]">{toToken.balance}</div>
            </div>
          )}
        </div>
        
        {rate && (
          <div className="pt-4 border-t border-[#334155]">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#94A3B8]">Exchange Rate</span>
              <span className="font-medium text-[#F8FAFC]">{rate}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface LiquidityPoolProps {
  poolName: string
  apr: string
  tvl: string
  volume24h: string
  tokens: Array<{
    symbol: string
    percentage: number
  }>
  className?: string
}

export function LiquidityPool({ poolName, apr, tvl, volume24h, tokens, className }: LiquidityPoolProps) {
  return (
    <Card className={cn('hover:border-[#3B82F6] transition-colors', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{poolName}</span>
          <div className="flex items-center gap-1 text-[#10B981] text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            {apr} APR
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-[#94A3B8]">TVL</div>
            <div className="font-semibold text-[#F8FAFC]">{tvl}</div>
          </div>
          <div>
            <div className="text-sm text-[#94A3B8]">24h Volume</div>
            <div className="font-semibold text-[#F8FAFC]">{volume24h}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-[#94A3B8]">Pool Composition</div>
          <div className="flex gap-2">
            {tokens.map((token, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full"></div>
                <span className="text-[#F8FAFC]">{token.symbol}</span>
                <span className="text-[#94A3B8]">{token.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full">
          Add Liquidity
        </Button>
      </CardContent>
    </Card>
  )
}

interface CrossChainStatusProps {
  fromChain: string
  toChain: string
  status: 'pending' | 'confirming' | 'completed' | 'failed'
  txHash?: string
  estimatedTime?: string
  className?: string
}

export function CrossChainStatus({ fromChain, toChain, status, txHash, estimatedTime, className }: CrossChainStatusProps) {
  const statusConfig = {
    pending: { color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10', text: 'Pending' },
    confirming: { color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10', text: 'Confirming' },
    completed: { color: 'text-[#10B981]', bg: 'bg-[#10B981]/10', text: 'Completed' },
    failed: { color: 'text-[#EF4444]', bg: 'bg-[#EF4444]/10', text: 'Failed' }
  }
  
  const config = statusConfig[status]
  
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Cross-Chain Bridge
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#627EEA] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">ETH</span>
            </div>
            <span className="font-medium text-[#F8FAFC]">{fromChain}</span>
          </div>
          <ArrowRightLeft className="w-5 h-5 text-[#94A3B8]" />
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#F8FAFC]">{toChain}</span>
            <div className="w-8 h-8 bg-[#4DA2FF] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">SUI</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#94A3B8]">Status</span>
          <div className={cn('px-3 py-1 rounded-full text-sm font-medium', config.bg, config.color)}>
            {config.text}
          </div>
        </div>
        
        {estimatedTime && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#94A3B8]">Estimated Time</span>
            <span className="text-sm font-medium text-[#F8FAFC]">{estimatedTime}</span>
          </div>
        )}
        
        {txHash && (
          <div className="pt-4 border-t border-[#334155]">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#94A3B8]">Transaction Hash</span>
              <Button variant="link" className="text-[#3B82F6] p-0 h-auto">
                {txHash.slice(0, 6)}...{txHash.slice(-4)}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface YieldFarmProps {
  farmName: string
  apy: string
  totalStaked: string
  userStaked?: string
  rewards?: string
  lockPeriod?: string
  className?: string
}

export function YieldFarm({ farmName, apy, totalStaked, userStaked, rewards, lockPeriod, className }: YieldFarmProps) {
  return (
    <Card className={cn('hover:border-[#10B981] transition-colors', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{farmName}</span>
          <div className="flex items-center gap-1 text-[#10B981] font-bold">
            <Activity className="w-4 h-4" />
            {apy} APY
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-[#94A3B8]">Total Staked</div>
            <div className="font-semibold text-[#F8FAFC]">{totalStaked}</div>
          </div>
          {lockPeriod && (
            <div>
              <div className="text-sm text-[#94A3B8]">Lock Period</div>
              <div className="font-semibold text-[#F8FAFC]">{lockPeriod}</div>
            </div>
          )}
        </div>
        
        {userStaked && (
          <div className="pt-4 border-t border-[#334155] space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[#94A3B8]">Your Stake</span>
              <span className="font-medium text-[#F8FAFC]">{userStaked}</span>
            </div>
            {rewards && (
              <div className="flex justify-between">
                <span className="text-sm text-[#94A3B8]">Pending Rewards</span>
                <span className="font-medium text-[#10B981]">{rewards}</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex gap-2">
          <Button className="flex-1">Stake</Button>
          {userStaked && (
            <Button variant="outline" className="flex-1">Harvest</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
