import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRightLeft,
  TrendingUp,
  Shield,
  BarChart3,
  Wallet,
  ArrowUpDown,
  PieChart,
  Activity,
  Lock,
  Globe
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1426] relative">
      {/* Brutal Navigation */}
      <nav className="border-b-4 border-[#00D9FF] bg-[#1A2332] sticky top-0 z-50 shadow-[0_0_20px_rgba(0,217,255,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00D9FF] border-2 border-[#00FF88] flex items-center justify-center relative">
                  <ArrowRightLeft className="w-6 h-6 text-[#0B1426]" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FF88] animate-pulse"></div>
                </div>
                <span className="text-2xl font-black text-white uppercase tracking-wider font-mono">UNIVERSAL CROSSCHAIN</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-[#8B9BB8] hover:text-[#00D9FF] transition-colors font-mono uppercase tracking-wider font-bold text-sm border-b-2 border-transparent hover:border-[#00D9FF] pb-1">SWAP</a>
                <a href="#" className="text-[#8B9BB8] hover:text-[#00D9FF] transition-colors font-mono uppercase tracking-wider font-bold text-sm border-b-2 border-transparent hover:border-[#00D9FF] pb-1">PORTFOLIO</a>
                <a href="#" className="text-[#8B9BB8] hover:text-[#00D9FF] transition-colors font-mono uppercase tracking-wider font-bold text-sm border-b-2 border-transparent hover:border-[#00D9FF] pb-1">BRIDGE</a>
                <a href="#" className="text-[#8B9BB8] hover:text-[#00D9FF] transition-colors font-mono uppercase tracking-wider font-bold text-sm border-b-2 border-transparent hover:border-[#00D9FF] pb-1">ANALYTICS</a>
              </div>
            </div>
            <Button variant="brutal" size="lg">
              <Wallet className="w-5 h-5 mr-2" />
              CONNECT WALLET
            </Button>
          </div>
        </div>
      </nav>

      {/* Brutal Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Brutal corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#00D9FF] opacity-60"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-[#00FF88] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-[#FF6B35] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#FFB800] opacity-60"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-[#1A2332] border-2 border-[#00D9FF] px-6 py-3 mb-8 relative">
              <div className="w-3 h-3 bg-[#00FF88] animate-pulse"></div>
              <span className="text-sm text-[#8B9BB8] font-mono uppercase tracking-wider font-bold">POWERED BY 1INCH FUSION+</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00D9FF] animate-ping"></div>
            </div>

            <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-none">
              CROSS-CHAIN
              <br />
              <span className="bg-gradient-to-r from-[#00D9FF] to-[#00FF88] bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,217,255,0.5)]">
                DEFI
              </span>
              <br />
              <span className="text-[#FF6B35] text-6xl lg:text-7xl">BRUTALIZED</span>
            </h1>

            <p className="text-xl text-[#8B9BB8] max-w-4xl mx-auto mb-12 font-mono leading-relaxed">
              THE MOST <strong className="text-[#00FF88]">BRUTAL</strong> CROSS-CHAIN DEFI PLATFORM EXTENDING 1INCH FUSION+ PROTOCOL
              TO MULTIPLE BLOCKCHAINS. <strong className="text-[#00D9FF]">SEAMLESS SWAPS</strong>, ADVANCED TRADING, AND UNIFIED PORTFOLIO MANAGEMENT.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <ArrowRightLeft className="w-6 h-6 mr-3" />
                INITIATE TRADING
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <BarChart3 className="w-6 h-6 mr-3" />
                ANALYZE DATA
              </Button>
            </div>
          </div>

          {/* Brutal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            <Card className="text-center relative group">
              <CardContent className="pt-8">
                <div className="text-4xl font-black text-[#00FF88] mb-3 font-mono">$2.4B+</div>
                <div className="text-sm text-[#8B9BB8] font-mono uppercase tracking-wider font-bold">TOTAL VOLUME</div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#00FF88] animate-pulse"></div>
              </CardContent>
            </Card>
            <Card className="text-center relative group">
              <CardContent className="pt-8">
                <div className="text-4xl font-black text-[#00D9FF] mb-3 font-mono">15+</div>
                <div className="text-sm text-[#8B9BB8] font-mono uppercase tracking-wider font-bold">SUPPORTED CHAINS</div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#00D9FF] animate-pulse"></div>
              </CardContent>
            </Card>
            <Card className="text-center relative group">
              <CardContent className="pt-8">
                <div className="text-4xl font-black text-[#FF6B35] mb-3 font-mono">500K+</div>
                <div className="text-sm text-[#8B9BB8] font-mono uppercase tracking-wider font-bold">ACTIVE USERS</div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#FF6B35] animate-pulse"></div>
              </CardContent>
            </Card>
            <Card className="text-center relative group">
              <CardContent className="pt-8">
                <div className="text-4xl font-black text-[#FFB800] mb-3 font-mono">99.9%</div>
                <div className="text-sm text-[#8B9BB8] font-mono uppercase tracking-wider font-bold">UPTIME</div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#FFB800] animate-pulse"></div>
              </CardContent>
            </Card>
          </div>
          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ArrowRightLeft,
                title: "Cross-Chain Swaps",
                description: "Seamless token swaps between Ethereum, Sui, and 15+ other blockchains with atomic guarantees and MEV protection.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "1inch Fusion+ Integration",
                description: "Built on battle-tested 1inch Fusion+ protocol with advanced order routing and partial fill support.",
                color: "green"
              },
              {
                icon: BarChart3,
                title: "Advanced Trading",
                description: "TWAP orders, limit strategies, options-like derivatives, and concentrated liquidity provision tools.",
                color: "purple"
              },
              {
                icon: PieChart,
                title: "Portfolio Management",
                description: "Unified multi-chain balance tracking, yield farming opportunities, and comprehensive risk assessment.",
                color: "orange"
              },
              {
                icon: Activity,
                title: "Real-time Analytics",
                description: "Live price monitoring, performance analytics, and market insights across all supported chains.",
                color: "cyan"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "Multi-signature wallets, time-locked transactions, and comprehensive audit trails for institutions.",
                color: "red"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:border-[#3B82F6] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-[#94A3B8]">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Interface Preview */}
      <section className="py-20 px-4 bg-[#1E293B]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Trading Interface</h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Experience institutional-grade trading with our advanced interface designed for both beginners and professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowUpDown className="w-5 h-5" />
                    Quick Swap
                  </CardTitle>
                  <CardDescription>
                    Swap tokens across chains with the best rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#94A3B8]">From</label>
                    <div className="flex gap-2">
                      <Input placeholder="0.0" className="flex-1" />
                      <Button variant="outline" className="px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#627EEA] rounded-full"></div>
                          ETH
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#94A3B8]">To</label>
                    <div className="flex gap-2">
                      <Input placeholder="0.0" className="flex-1" />
                      <Button variant="outline" className="px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-[#4DA2FF] rounded-full"></div>
                          SUI
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <ArrowRightLeft className="w-4 h-4 mr-2" />
                    Swap Tokens
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Portfolio Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">Total Balance</span>
                      <span className="text-2xl font-bold text-[#F8FAFC]">$24,567.89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#94A3B8]">24h Change</span>
                      <span className="text-[#10B981] font-semibold">+$1,234.56 (+5.3%)</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { symbol: "ETH", name: "Ethereum", balance: "$12,345", change: "+2.4%" },
                        { symbol: "SUI", name: "Sui", balance: "$8,901", change: "+8.7%" },
                        { symbol: "USDC", name: "USD Coin", balance: "$3,321", change: "0.0%" }
                      ].map((token, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-[#334155] last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-white">{token.symbol.slice(0, 2)}</span>
                            </div>
                            <div>
                              <div className="font-medium text-[#F8FAFC]">{token.symbol}</div>
                              <div className="text-sm text-[#94A3B8]">{token.name}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-[#F8FAFC]">{token.balance}</div>
                            <div className={`text-sm ${token.change.startsWith('+') ? 'text-[#10B981]' : token.change.startsWith('-') ? 'text-[#EF4444]' : 'text-[#94A3B8]'}`}>
                              {token.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-[#94A3B8] mb-8">
            Join thousands of traders using Universal Crosschain for seamless cross-chain DeFi operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet & Start
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              <Globe className="w-5 h-5 mr-2" />
              Explore Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
